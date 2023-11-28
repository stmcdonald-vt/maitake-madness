import ShootState from "../mushroomFSM/shootState";
import Mushroom from "./mushroom";
import game from "../../game";
import entityManager from "../../managers/entityManager";
import gp5 from "../../sketch";
import Bullet from "../projectiles/bullet";
import Spore from "../projectiles/spore";
import JumpBurstState from "../mushroomFSM/jumpBurstState";

export default class MaitakeMushroom extends Mushroom{
        /**
         * @param {p5.Vector} position 
         */
        constructor(position) {
            super();
            this.position = position;
            this.image = game.assets.maitake;
            this.states = [
                new ShootState(this, () => this.shootBullet()),
                new JumpBurstState(this, (angle) => this.shootSpore(angle)),
                new ShootState(this, () => this.shootSpore()),
                new JumpBurstState(this, (angle) => this.shootBullet(angle)),
            ];
            this.currentState = 0;
            this.shootAngle = 0;
            this.shootCooldown = 0;
            this._topLeftVector = gp5.createVector(0, 0);
            this.health = 100 * game.enemyHealthMultiplier();
            this.target = entityManager.gnome;
            this.maxCooldown = 10;
            this.stateTimer = 300;
            this.maxStateTime = 300;
        }
        
        shootBullet(angle=this.shootAngle) {
            entityManager.addMushroomProjectile(new Bullet(this.position.x, this.position.y, angle));
        }

        shootSpore(angle=this.shootAngle) {
            entityManager.addMushroomProjectile(new Spore(this.position.x, this.position.y, angle, 2, 400));
        }
    
        get distanceToTarget() {
            return gp5.dist(this.position.x, this.position.y, this.target.position.x, this.target.position.y);
        }
    
        changeState() {
            if (this.stateTimer < 0) {
                this.currentState = (this.currentState + 1) % this.states.length;
                this.stateTimer = this.maxStateTime;
            }
        }
    
        update() {
            super.update();
            this.shootCooldown--;
            this.stateTimer--;
        }
}