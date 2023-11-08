import game from "../game";
import gp5, { constants } from "../sketch";
import ChaseState from "./mushroomFSM/chaseState";
import entityManager from "../managers/entityManager";
import ShootState from "./mushroomFSM/shootState";
// Button mushroom. He feels nothing but emptiness.
class MorelMushroom {
    /**
     * @param {p5.Vector} position 
     */
    constructor(position) {
        this.position = position;
        this.velocity = gp5.createVector(0, 0)
        this.image = game.assets.morel;
        this.states = [new ChaseState(this), new ShootState(this)];
        this.currentState = 0;
        this.angle = 0;
        this.shootAngle
    }

    shoot() {

    }

    changeState() {
        switch (this.currentState) {
            case 0:
                if (entityManager.distanceToPlayer(this) < 200) {
                    this.currentState = 1;
                }
                break;
            case 1:
                if (entityManager.distanceToPlayer(this) > 200) {
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
        gp5.scale(.75, .75);
        gp5.image(this.image, 0, 0);
        gp5.pop();
    }

    display() {
        this.update();
        this.draw();
    }
}
export default MorelMushroom;