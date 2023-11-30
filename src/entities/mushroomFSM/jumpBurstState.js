import gp5, { constants } from "../../sketch";

export default class JumpBurstState {
    constructor(enemy, shootFunction, jumpHeight = 12) {
        this.enemy = enemy;
        this.step = gp5.createVector(0, 0);
        this.shootFunction = shootFunction;
        this.jumpHeight = jumpHeight;
        this.jumpState = 0;
        this.jumpingUp = false;
        this.jumpCooldown = 0;
        this.maxCooldown = 60;
        this.fired = true;
        this.offset = false;
    }

    shotBurst() {
        for (let i = this.offset ? constants.SIXTEENTH_PI : 0; i < gp5.TWO_PI; i += constants.EIGHTH_PI) {
            this.shootFunction(i);
        }
    }

    execute() {

        if (this.jumpingUp) {
            if (this.jumpState < this.jumpHeight) {
                this.enemy.position.y--;
                this.jumpState++;
            } else {
                this.jumpingUp = false;
            }
        } else {
            if (this.jumpState > 0) {
                this.enemy.position.y++;
                this.jumpState--;
            } else {
                if (!this.fired) {
                    this.shotBurst();
                    this.fired = true;
                }

                if (this.jumpCooldown <= 0) {
                    this.jumpingUp = true;
                    this.jumpCooldown = this.maxCooldown;
                    this.fired = false;
                    this.offset = !this.offset;
                    this.enemy.changeState();
                }
            }
        }
        this.jumpCooldown--;

    }
}