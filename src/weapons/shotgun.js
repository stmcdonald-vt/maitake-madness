import game from "../game";
import entityManager from "../managers/entityManager";
import Bullet from "../entities/bullet";
import gp5 from "../sketch";

export default class Shotgun {
    constructor() {
        this.image = game.assets.shotgun;
        this.spread = gp5.HALF_PI; // in radians
        this.halfSpread = this.spread / 2;
        this.halfWidth = this.image.width / 2;
        this.pellets = 5; // Number of
        this.increment = this.spread / this.pellets;
    }

    shoot(position, angle, spacing) {
        const lowerBound = angle - this.halfSpread;
        const spreadStartX = position.x + ((spacing + this.halfWidth) * gp5.cos(angle));
        const spreadStartY = position.y + ((spacing + this.halfWidth) * gp5.sin(angle))
        // const upperBound = angle + this.halfSpread;
        for (let i = 0; i < this.pellets; i++) {
            const pelletAngle = lowerBound + this.increment * i;
            entityManager.addGnomeProjectile(new Bullet(spreadStartX, spreadStartY, pelletAngle, undefined, 100, 4, 0.1));
        }
    }
}