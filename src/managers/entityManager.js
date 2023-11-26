import gp5 from "../sketch";
import Gnome from "../entities/gnome";
import ButtonMushroom from "../entities/buttonMushroom";
import MorelMushroom from "../entities/morelMushroom";
import collisionDetector from "./collisionDetector";
import game from "../game";
import levels from "../data/levels.json"
import PowerRelic from "../entities/relics/powerRelic";
import SpeedRelic from "../entities/relics/speedRelic";
import DefenseRelic from "../entities/relics/defenseRelic";

// Handles input 
const entityManager = {
    initialize: function() {
        this.gnome = new Gnome(gp5.createVector(200, 200));
        this.mushrooms = [];
        this.gnomeProjectiles = [];
        this.mushroomProjectiles = [];
        this.relics = [];
    },

    isInbounds: function(entity) {
        return entity.position.x > 0
            && entity.position.x < gp5.width
            && entity.position.y > 0
            && entity.position.y < gp5.height
    },

    cleanupProjectiles: function() {
        this.gnomeProjectiles = this.gnomeProjectiles.filter(p => this.isInbounds(p) && !p.disabled);
        this.mushroomProjectiles = this.mushroomProjectiles.filter(p => this.isInbounds(p) && !p.disabled);
    },

    cleanupMushrooms: function() {
        this.mushrooms = this.mushrooms.filter(mushroom => !mushroom.dead);
        if (this.mushrooms.length === 0) {
            game.advanceWave();
        }
    },

    addGnomeProjectile: function(proj) {
        this.gnomeProjectiles.push(proj);
    },

    addMushroomProjectile: function(proj) {
        this.mushroomProjectiles.push(proj);
    },

    setupGame: function() {
        this.gnome.registerClickListeners();
        this.startLevel();
        this.startWave();
    },

    startLevel: function() {
        const level = levels[game.state.LEVEL];
        const relicMap = {
            power: PowerRelic,
            speed: SpeedRelic,
            defense: DefenseRelic
        }

        level.relics.forEach(relic => {
            this.relics.push(new relicMap[relic.type](gp5.createVector(relic.location[0], relic.location[1])));
        })
    },

    startWave: function() {
        const wave = levels[game.state.LEVEL].waves[game.state.WAVE];

        wave.morel?.forEach(coord => this.mushrooms.push(new MorelMushroom(gp5.createVector(coord[0], coord[1]))));
        wave.button?.forEach(coord => this.mushrooms.push(new ButtonMushroom(gp5.createVector(coord[0], coord[1]))));
    },

    distanceToPlayer: function(entity) {
        return gp5.dist(this.gnome.position.x, this.gnome.position.y, entity.position.x, entity.position.y);
    },

    detectCollisions: function() {
        this.gnomeProjectiles.forEach(projectile => {
            this.mushrooms.forEach(mushroom => {
                if (!projectile.disabled && !mushroom.dead) {
                    if (collisionDetector.spriteCollision(projectile.position, projectile.image, mushroom.topLeft, mushroom.image)) {
                        projectile.disabled = true;
                        mushroom.hit(projectile.damage);
                        if (mushroom.health <= 0) {
                            mushroom.dead = true;
                        }
                    }
                }
            })
        })

        this.mushroomProjectiles.forEach(projectile => {
            if (!projectile.disabled && collisionDetector.spriteCollision(this.gnome.topLeft, this.gnome.image, projectile.position, projectile.image)) {
                projectile.disabled = true;
                this.gnome.hit(projectile.damage);
                if (this.gnome.health <= 0) {
                    game.setLoss();
                }
            }
            this.relics.forEach(relic => {
                if (!projectile.disabled) {
                    if (collisionDetector.spriteCollision(projectile.position, projectile.image, relic.position, relic.image)) {
                        projectile.disabled = true;
                        relic.hit(projectile.damage);
                        if (relic.health <= 0) {
                            game.setLoss();
                        }
                    }
                }
            })
        })

        this.mushrooms.forEach(mushroom => {
            if (!mushroom.dead && collisionDetector.spriteCollision(this.gnome.topLeft, this.gnome.image, mushroom.topLeft, mushroom.image)) {
                this.gnome.hit(0.5);
                if (this.gnome.health <= 0) {
                    game.setLoss();
                }
            }
        })
    },

    update: function() {
        this.relics.forEach(relic => relic.display());
        this.mushrooms.forEach(mushroom => mushroom.display());
        this.gnome.display();
        this.gnomeProjectiles.forEach(projectile => projectile.display());
        this.mushroomProjectiles.forEach(projectile => projectile.display());

        this.detectCollisions();

        if (gp5.frameCount % 120 === 0) {
            this.cleanupProjectiles();
        }

        if (gp5.frameCount % 30 === 0) {
            this.cleanupMushrooms();
        }
    }
}

export default entityManager;