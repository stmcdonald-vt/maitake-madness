import gp5 from "../sketch";

export default class Mushroom {
    get topLeft() {
        this._topLeftVector.set(this.position.x - this.image.width / 2, this.position.y - this.image.height / 2);
        return this._topLeftVector;
    }

    update() {
        this.states[this.currentState].execute();
        this.position.add(this.velocity);
    }

    draw() {
        gp5.push();
        gp5.imageMode(gp5.CENTER);
        gp5.translate(this.position.x, this.position.y);
        gp5.image(this.image, 0, 0);
        gp5.pop();
    }

    display() {
        if (!this.dead) {
            this.update();
            this.draw();
        }
    }
}