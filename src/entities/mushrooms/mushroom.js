import gp5 from "../../sketch";
import Character from "../character";
import ChaseRelicState from "../mushroomFSM/chaseRelicState";
import ChaseState from "../mushroomFSM/chaseState";

export default class Mushroom extends Character {
    constructor() {
        super();
        this.velocity = gp5.createVector(0, 0);
        this.dead = false;
        this.contactDamagePerFrame = 0.1;
    }

    get topLeft() {
        this._topLeftVector.set(this.position.x - this.image.width / 2, this.position.y - this.image.height / 2);
        return this._topLeftVector;
    }

    update() {
        const currentState = this.states[this.currentState];
        currentState.execute();
        this.position.add(this.velocity);

        if (currentState instanceof ChaseState || currentState instanceof ChaseRelicState) {
            this.hopWalk();
        }
    }

    draw() {
        gp5.push();
        gp5.imageMode(gp5.CENTER);
        gp5.translate(this.position.x, this.position.y);
        gp5.image(this.image, 0, 0);
        this.drawHitIndication();
        gp5.pop();
    }

    display() {
        if (!this.dead) {
            this.update();
            this.draw();
        }
    }
}