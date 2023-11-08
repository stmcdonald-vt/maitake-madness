import gp5 from "../sketch";
import Gnome from "../entities/gnome";
import ButtonMushroom from "../entities/buttonMushroom";
import MorelMushroom from "../entities/morelMushroom";
// Handles input 
const entityManager = {
    initialize: function() {
        this.gnome = new Gnome(gp5.createVector(200, 200));
        this.mushrooms = [
            // new ButtonMushroom(gp5.createVector(100, 100)),
            new MorelMushroom(gp5.createVector(300, 100))
        ];
        this.projectiles = [];
    },

    isInbounds: function(entity) {
        return entity.position.x > 0
            && entity.position.x < gp5.width
            && entity.position.y > 0
            && entity.position.y < gp5.height
    },

    cleanupProjectiles: function() {
        this.projectiles = this.projectiles.filter(p => this.isInbounds(p));
    },

    addProjectile: function(proj) {
        this.projectiles.push(proj);
    },

    setupGame: function() {
        this.gnome.registerClickListeners();
    },

    distanceToPlayer: function(entity) {
        return gp5.dist(this.gnome.position.x, this.gnome.position.y, entity.position.x, entity.position.y);
    },
    update: function() {
        this.mushrooms.forEach(mushroom => mushroom.display());
        this.gnome.display();
        this.projectiles.forEach(projectile => projectile.display());

        if (gp5.frameCount % 120 === 0) {
            this.cleanupProjectiles();
        }
    }
}

export default entityManager;