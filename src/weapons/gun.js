import entityManager from "../managers/entityManager";
import Bullet from "../entities/projectiles/bullet";
import gp5 from "../sketch";

export default class Gun {
    constructor(spread, pellets, spacing, range, damage, decay, image, cooldown, speed=undefined) {
        this.spread = spread;
        this.pellets = pellets;
        this.spacing = spacing;
        this.range = range;
        this._damage = damage;
        this.damageMultiplier = 1;
        this.decay = decay;
        this.image = image;
        this.cooldown = cooldown;
        this.speed = speed;
        this.halfSpread = this.spread / 2;
        this.halfWidth = this.image.width / 2;
        this.increment = this.spread / this.pellets;
        this.lastShotFrame = 0;
    }

    get damage() {
        return this._damage * this.damageMultiplier;
    }
    
    shoot(position, angle) {
        if (gp5.frameCount - this.lastShotFrame < this.cooldown || this.ammo <= 0) {
            return;
        }
        const lowerBound = angle - this.halfSpread;
        const startX = position.x + ((this.spacing + this.halfWidth) * gp5.cos(angle));
        const startY = position.y + ((this.spacing + this.halfWidth) * gp5.sin(angle))
        for (let i = 0; i < this.pellets; i++) {
            const pelletAngle = lowerBound + this.increment * i;
            entityManager.addGnomeProjectile(new Bullet(startX, startY, pelletAngle, this.speed, this.range, this.damage, this.decay));
        }
        this.ammo--;
        this.lastShotFrame = gp5.frameCount;
    }
}