import game from "../game";
import entityManager from "../managers/entityManager";
import Bullet from "../entities/bullet";
import gp5 from "../sketch";

export default class Pistol {
    constructor() {
        this.image = game.assets.pistol;
    }

    shoot(position, angle, spacing) {
        entityManager.addGnomeProjectile(new Bullet(position.x + (spacing * gp5.cos(angle)), position.y + (spacing * gp5.sin(angle)), angle));
    }
}