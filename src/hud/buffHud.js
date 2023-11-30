import entityManager from "../managers/entityManager";
import gp5 from "../sketch";

export default class BuffHud {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get text() {
        const gnome = entityManager.gnome;
        if (gnome.speedMultiplier > 1) {
            return 'Speed ↑';
        }
        if (gnome.damageTakenMultiplier < 1) {
            return 'Defense ↑';
        }
        if (gnome.gun.damageMultiplier > 1) {
            return 'Damage ↑';
        }
        if (gnome.regenRate > 0) {
            return 'Regenerating ↑'
        }
    }

    display() {
        gp5.push();
        gp5.fill('black');
        gp5.text(this.text, this.x, this.y);
        gp5.pop();
    }
}