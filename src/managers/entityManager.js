import gp5 from "../sketch";
import Gnome from "../entities/gnome";
// Handles input 
class EntityManager {
    constructor() {
        this.gnome = new Gnome(gp5.createVector(200, 200));
    }

    update() {
        this.gnome.display();
    }
}

export default EntityManager;