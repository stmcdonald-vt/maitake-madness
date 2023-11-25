import game from "../game";
import gp5 from "../sketch";
import ChaseState from "./mushroomFSM/chaseState";
import entityManager from "../managers/entityManager";
import ChargeState from "./mushroomFSM/chargeState";
import Mushroom from "./mushroom";
// Button mushroom. He feels nothing but emptiness.
class ButtonMushroom extends Mushroom {
    

    /**
     * @param {p5.Vector} position 
     */
    constructor(position) {
        super();
        this.position = position;
        this.velocity = gp5.createVector(0, 0)
        this.image = game.assets.button;
        this.states = [new ChaseState(this), new ChargeState(this)];
        this.currentState = 0;
        this.angle = 0;
        this.health = 5;
        this.dead = false;
        this._topLeftVector = gp5.createVector(0, 0);
        this.hopDelta = .75;
    }

    get topLeft() {
        this._topLeftVector.set(this.position.x - this.image.width / 2, this.position.y - this.image.height / 2);
        return this._topLeftVector;
    }

    changeState() {
        switch (this.currentState) {
            case 0:
                if (entityManager.distanceToPlayer(this) < 100 && entityManager.isInbounds(this)) {
                    this.angle = this.states[1].setAngle();
                    this.currentState = 1;
                }
                break;
            case 1:
                if (entityManager.distanceToPlayer(this) > 150 || !entityManager.isInbounds(this) || this.states[this.currentState].chargeCounter < 0) {
                    this.currentState = 0;
                }
        }
    }

    draw() { // override Mushroom draw(), need to rotate sprite.
        gp5.push();
        gp5.imageMode(gp5.CENTER);
        gp5.translate(this.position.x, this.position.y);
        if (this.currentState === 1) {
            gp5.rotate(this.angle + gp5.HALF_PI);
        }
        gp5.image(this.image, 0, 0);
        this.drawHitIndication();
        gp5.pop();
    }
}
export default ButtonMushroom;