import gp5 from "../../sketch";
export default class ShootState {
    constructor(enemy) {
        this.enemy = enemy;
        this.step = gp5.createVector(0, 0);
    }

    execute() {
        if (this.enemy.shootCooldown <= 0) {
            this.enemy.velocity.set(0, 0);
            this.step.set(this.enemy.target.position.x - this.enemy.position.x, this.enemy.target.position.y - this.enemy.position.y);
            this.enemy.shootAngle = this.step.heading();
            this.enemy.shoot();
            this.enemy.shootCooldown = this.enemy.maxCooldown || 40;
        }

        this.enemy.changeState();
    }
}