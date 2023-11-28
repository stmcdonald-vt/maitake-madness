import game from "../../game";
import gp5, { constants } from "../../sketch";
import ChaseState from "../mushroomFSM/chaseState";
import entityManager from "../../managers/entityManager";
import ShootState from "../mushroomFSM/shootState";
import Bullet from "../projectiles/bullet";
import Mushroom from "./mushroom";
import ChaseRelicState from "../mushroomFSM/chaseRelicState";
import Spore from "../projectiles/spore";
// Button mushroom. He feels nothing but emptiness.
class ChanterelleMushroom extends Mushroom{
    /**
     * @param {p5.Vector} position 
     */
    constructor(position) {
        super();
        this.position = position;
        this.velocity = gp5.createVector(0, 0)
        this.image = game.assets.chanterelle;
        this.states = [new ChaseRelicState(this), new ChaseState(this), new ShootState(this)];
        this.currentState = 0;
        this.angle = 0;
        this.shootAngle;
        this.shootCooldown = 0;
        this._topLeftVector = gp5.createVector(0, 0);
        this.dead = false;
        this.health = 10 * game.enemyHealthMultiplier();
        this.target = entityManager.gnome;
        this.shotSpeed = 3;
        this.shotDamage = 1;
        this.shotDistance = 100;
        this.shotDecayPerFrame = 0.1;
        this.maxCooldown = 100;
    }


    
    shoot() {
        entityManager.addMushroomProjectile(new Spore(this.position.x, this.position.y, this.shootAngle, this.shotSpeed, this.shotDistance, this.shotDamage, this.shotDecayPerFrame, true));
        entityManager.addMushroomProjectile(new Spore(this.position.x, this.position.y, this.shootAngle - constants.EIGHTH_PI, this.shotSpeed, this.shotDistance, this.shotDamage, this.shotDecayPerFrame, true));
        entityManager.addMushroomProjectile(new Spore(this.position.x, this.position.y, this.shootAngle + constants.EIGHTH_PI, this.shotSpeed, this.shotDistance, this.shotDamage, this.shotDecayPerFrame, true));
    }

    get distanceToTarget() {
        return gp5.dist(this.position.x, this.position.y, this.target.position.x, this.target.position.y);
    }

    changeState() {
        switch (this.currentState) {
            case 0:
                if (this.distanceToTarget < 50) {
                    this.currentState = 2;
                } else if (entityManager.distanceToPlayer(this) < 200) {
                    this.currentState = 1
                }
                break;
            case 1:
                if (entityManager.distanceToPlayer(this) < 100 && entityManager.isInbounds(this)) {
                    this.currentState = 2; // switch to shooting when within range of player and inbounds
                } else if (entityManager.distanceToPlayer(this) > 200) {
                    this.currentState = 0;
                }
                break;
            case 2:
                if ((this.target === entityManager.gnome && this.distanceToTarget > 100)
                    || (this.target !== entityManager.gnome && entityManager.distanceToPlayer(this) < 100)
                    || !entityManager.isInbounds(this)) {
                    this.currentState = 1; // Switch back to chase if gnome moves out of range or the gnome gets close while shooting relic.
                }
        }
    }

    update() {
        super.update();
        this.shootCooldown--;
    }
}
export default ChanterelleMushroom;