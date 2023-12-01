import entityManager from "../managers/entityManager";
import gp5 from "../sketch";
import HealthBar from "./healthBar";
export default class HealthHud {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.healthBar = new HealthBar(this.x + 75, this.y - 17, entityManager.gnome);
    }

    display() {
        gp5.push();
        gp5.fill('black');
        gp5.text(`Health:`, this.x, this.y);
        gp5.pop();
        this.healthBar.display();
    }
}