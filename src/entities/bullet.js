import gp5 from "../sketch";
import game from "../game";

export default class Bullet {
    constructor(x, y, heading, speed=6, distance=400, damage=2, decayPerFrame=0.01) {
        this.position = gp5.createVector(x, y);
        this.speed = speed;
        this.velocity = gp5.createVector(speed, 0);
        this.velocity.setHeading(heading);
        this.heading = heading;
        this.distance = distance;
        this.damage = damage;
        this.decayPerFrame = decayPerFrame;
        this.disabled = false;
        this.image = game.assets.bullet;
    }

    update() {
        this.position.add(this.velocity);
        this.distance -= this.speed;
        this.damage -= this.decayPerFrame;
        if (this.distance <= 0) {
            this.disabled = true;
        }
    }

    draw() {
        gp5.push();
        gp5.translate(this.position.x, this.position.y);
        gp5.rotate(this.heading);
        gp5.image(this.image, 0, 0);
        gp5.pop();
    }

    display() {
        if (!this.disabled) {
            this.update();
            this.draw();
        }
    }
}