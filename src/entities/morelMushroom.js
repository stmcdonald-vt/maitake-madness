import game from "../game";
import gp5, { constants } from "../sketch";
import ChaseState from "./mushroomFSM/chaseState";
import entityManager from "../managers/entityManager";
import ShootState from "./mushroomFSM/shootState";
import Bullet from "./bullet";
import Mushroom from "./mushroom";
// Button mushroom. He feels nothing but emptiness.
class MorelMushroom extends Mushroom{
    /**
     * @param {p5.Vector} position 
     */
    constructor(position) {
        super();
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
    
    shoot() {
        entityManager.addMushroomProjectile(new Bullet(this.position.x, this.position.y, this.shootAngle));
    }

    changeState() {
        switch (this.currentState) {
            case 0:
                if (entityManager.distanceToPlayer(this) < 200 && entityManager.isInbounds(this)) {
                    this.currentState = 1; // switch to shooting when within range of player and inbounds
                }
                break;
            case 1:
                if (entityManager.distanceToPlayer(this) > 200 || !entityManager.isInbounds(this)) {
                    this.currentState = 0;
                }
        }
    }

    update() {
        super.update();
        this.shootCooldown--;
    }

    draw() {
        gp5.push();
        gp5.noFill();
        gp5.imageMode(gp5.CENTER);
        gp5.translate(this.position.x, this.position.y);
        gp5.image(this.image, 0, 0);
        gp5.pop();
    }
}
export default MorelMushroom;