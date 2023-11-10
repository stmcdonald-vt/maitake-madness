import game from "../game";
import gp5, { constants } from "../sketch";
import ChaseState from "./mushroomFSM/chaseState";
import entityManager from "../managers/entityManager";
import ShootState from "./mushroomFSM/shootState";
import CollisionDetector from "../managers/collisionDetector";
import Bullet from "./bullet";
// Button mushroom. He feels nothing but emptiness.
class MorelMushroom {
    /**
     * @param {p5.Vector} position 
     */
    constructor(position) {
        this.position = position;
        this.velocity = gp5.createVector(0, 0)
        this.image = game.assets.morel;
        this.image.loadPixels();
        this.states = [new ChaseState(this), new ShootState(this)];
        this.currentState = 0;
        this.angle = 0;
        this.shootAngle;
        this.shootCooldown = 0;
        this._topLeftVector = gp5.createVector(0, 0);
        this.dead = false;
        this.health = 10 * game.enemyHealthMultiplier();
    }

    get topLeft() {
        this._topLeftVector.set(this.position.x - this.image.width / 2, this.position.y - this.image.height / 2);
        return this._topLeftVector;
    }

    shoot() {
        entityManager.addMushroomProjectile(new Bullet(this.position.x, this.position.y, this.shootAngle));
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
        this.shootCooldown--;
    }

    draw() {
        gp5.push();
        gp5.noFill();
        // gp5.rect(this.topLeft.x, this.topLeft.y, this.image.width, this.image.height)
        gp5.imageMode(gp5.CENTER);
        gp5.translate(this.position.x, this.position.y);
        // gp5.scale(.75, .75);
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
export default MorelMushroom;