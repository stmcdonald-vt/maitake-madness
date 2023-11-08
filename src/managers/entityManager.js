import gp5 from "../sketch";
import Gnome from "../entities/gnome";
import ButtonMushroom from "../entities/buttonMushroom";
// Handles input 
const entityManager = {
    initialize: function() {
        this.gnome = new Gnome(gp5.createVector(200, 200));
        this.mushrooms = [
            new ButtonMushroom(gp5.createVector(100, 100)),
        ]
    },

    distanceToPlayer: function(entity) {
        return gp5.dist(this.gnome.position.x, this.gnome.position.y, entity.position.x, entity.position.y);
    },
    update: function() {
        this.gnome.display();
        this.mushrooms.forEach(mushroom => mushroom.display());
    }
}

export default entityManager;