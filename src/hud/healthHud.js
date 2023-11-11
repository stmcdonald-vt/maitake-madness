import entityManager from "../managers/entityManager";
import gp5 from "../sketch";

export default class HealthHud {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        const gnome = entityManager.gnome;
        gp5.push();
        gp5.fill('black');
        gp5.text(`Health: ${gp5.floor(gnome.health / gnome.startHealth * 100)}%`, this.x, this.y);
        gp5.pop();
    }
}