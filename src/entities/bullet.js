import gp5 from "../sketch";

export default class Bullet {
    constructor(x, y, heading, speed=6) {
        this.position = gp5.createVector(x, y);
        this.velocity = gp5.createVector(speed, 0);
        this.velocity.setHeading(heading);
    }

    update() {
        this.position.add(this.velocity);
    }

    draw() {
        gp5.push();
        gp5.translate(this.position.x, this.position.y)
        gp5.fill('black');
        gp5.circle(0, 0, 6);
        gp5.pop();
    }

    display() {
        this.update();
        this.draw();
    }
}