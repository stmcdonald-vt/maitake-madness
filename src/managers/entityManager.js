import gp5 from "../sketch";
import Gnome from "../entities/gnome";
import ButtonMushroom from "../entities/mushrooms/buttonMushroom";
import MorelMushroom from "../entities/mushrooms/morelMushroom";
import collisionDetector from "./collisionDetector";
import game from "../game";
import levels from "../data/levels.json"
import PowerRelic from "../entities/relics/powerRelic";
import SpeedRelic from "../entities/relics/speedRelic";
import DefenseRelic from "../entities/relics/defenseRelic";
import ChanterelleMushroom from "../entities/mushrooms/chanterelleMushroom";
import MaitakeMushroom from "../entities/mushrooms/maitakeMushroom";
import FadingParticleSystem from "../particleSystems/fadingParticleSystem";
import ExplosionParticleSystem from "../particleSystems/expolosionParticleSystem";
import HealthRelic from "../entities/relics/healthRelic";

// Handles input 
const entityManager = {
    initialize: function() {
        this.gnome = new Gnome(gp5.createVector(200, 200));
        this.mushrooms = [];
        this.gnomeProjectiles = [];
        this.mushroomProjectiles = [];
        this.relics = [];
        this.particleSystems = [];
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

    addParticleSystem: function(system) {
        this.particleSystems.push(system);
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
            defense: DefenseRelic,
            health: HealthRelic
        }

        level.relics.forEach(relic => {
            this.relics.push(new relicMap[relic.type](gp5.createVector(relic.location[0], relic.location[1])));
        })
    },

    startWave: function() {
        const wave = levels[game.state.LEVEL].waves[game.state.WAVE];

        wave.morel?.forEach(coord => this.mushrooms.push(new MorelMushroom(gp5.createVector(coord[0], coord[1]))));
        wave.button?.forEach(coord => this.mushrooms.push(new ButtonMushroom(gp5.createVector(coord[0], coord[1]))));
        wave.chanterelle?.forEach(coord => this.mushrooms.push(new ChanterelleMushroom(gp5.createVector(coord[0], coord[1]))));
        wave.maitake?.forEach(coord => this.mushrooms.push(new MaitakeMushroom(gp5.createVector(coord[0], coord[1]))));
        wave.dummy?.forEach(coord => this.mushrooms.push(new MaitakeMushroom(gp5.createVector(coord[0], coord[1]), true)));

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
                            this.addParticleSystem(new ExplosionParticleSystem(mushroom.position.x, mushroom.position.y, mushroom.colors));
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
                if (projectile.poison) {
                    this.gnome.inflictPoison(projectile.poisonFrames);
                }
                if (this.gnome.health <= 0) {
                    game.setLoss();
                }
            }
            this.relics.forEach(relic => {
                if (!projectile.disabled) {
                    if (collisionDetector.spriteCollision(projectile.position, projectile.image, relic.topLeft, relic.image)) {
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
                this.gnome.hit(mushroom.contactDamagePerFrame);
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
        this.particleSystems.forEach(system => system.update());
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