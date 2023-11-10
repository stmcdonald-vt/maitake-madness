import gp5 from "../sketch";
import Gnome from "../entities/gnome";
import ButtonMushroom from "../entities/buttonMushroom";
import MorelMushroom from "../entities/morelMushroom";
import collisionDetector from "./collisionDetector";
import game from "../game";

// Handles input 
const entityManager = {
    initialize: function() {
        this.gnome = new Gnome(gp5.createVector(200, 200));
        this.mushrooms = [
            // new ButtonMushroom(gp5.createVector(100, 100)),
            new MorelMushroom(gp5.createVector(300, 100)),

        ];
        this.gnomeProjectiles = [];
        this.mushroomProjectiles = [];
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
    },

    addGnomeProjectile: function(proj) {
        this.gnomeProjectiles.push(proj);
    },

    addMushroomProjectile: function(proj) {
        this.mushroomProjectiles.push(proj);
    },

    setupGame: function() {
        this.gnome.registerClickListeners();
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
                        mushroom.health -= projectile.damage;
                        console.log(mushroom.health)
                        if (mushroom.health <= 0) {
                            mushroom.dead = true;
                            // game.decrementMushroomCount();
                        }
                    }
                }
            })
        })
    },

    update: function() {
        this.mushrooms.forEach(mushroom => mushroom.display());
        this.gnome.display();
        this.gnomeProjectiles.forEach(projectile => projectile.display());
        this.mushroomProjectiles.forEach(projectile => projectile.display());

        this.detectCollisions();

        if (gp5.frameCount % 120 === 0) {
            this.cleanupProjectiles();
        }

        if (gp5.frameCount % 130 === 0) {
            this.cleanupMushrooms();
        }
    }
}

export default entityManager;