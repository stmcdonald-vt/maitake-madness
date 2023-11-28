import gp5 from "../../sketch";

export default class Projectile {
    update() {
        this.position.add(this.velocity);
        this.distance -= this.speed;
        this.damage -= this.decayPerFrame;
        if (this.damage < 0) {
            this.damage = 0;
        }
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