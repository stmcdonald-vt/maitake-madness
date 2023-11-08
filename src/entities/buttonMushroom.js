import game from "../game";
import gp5, { constants } from "../sketch";
import ChaseState from "./mushroomFSM/chaseState";
import entityManager from "../managers/entityManager";
import ChargeState from "./mushroomFSM/chargeState";
// Button mushroom. He feels nothing but emptiness.
class ButtonMushroom {
    /**
     * @param {p5.Vector} position 
     */
    constructor(position) {
        this.position = position;
        this.velocity = gp5.createVector(0, 0)
        this.image = game.assets.button;
        this.states = [new ChaseState(this), new ChargeState(this)];
        this.currentState = 0;
        this.angle = 0;
    }

    changeState() {
        switch (this.currentState) {
            case 0:
                if (entityManager.distanceToPlayer(this) < 100) {
                    this.angle = this.states[1].setAngle();
                    this.currentState = 1;
                }
                break;
            case 1:
                if (entityManager.distanceToPlayer(this) > 150) {
                    this.currentState = 0;
                }
        }
    }

    update() {
        this.states[this.currentState].execute();
        this.position.add(this.velocity);
    }

    draw() {
        gp5.push();
        gp5.imageMode(gp5.CENTER);
        gp5.translate(this.position.x, this.position.y);
        if (this.currentState === 1) {
            gp5.rotate(this.angle + gp5.HALF_PI);
        }
        gp5.scale(.5, .5)
        gp5.image(this.image, 0, 0);
        gp5.pop();
    }



    display() {
        this.update();
        this.draw();
    }
}
export default ButtonMushroom;