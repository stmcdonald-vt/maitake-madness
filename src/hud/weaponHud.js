import entityManager from "../managers/entityManager";
import gp5 from "../sketch";

export default class WeaponHud {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        const gun = entityManager.gnome.gun;
        gp5.push();
        gp5.fill('black');
        gp5.text(`${gun.name}: ${gun.ammo === Infinity ? "∞" : gun.ammo}`, this.x, this.y);
        // gp5.text(`${gun.ammo === Infinity ? "∞" : gun.ammo} Bullets`, this.x, this.y + 30);
        gp5.pop();
    }
}