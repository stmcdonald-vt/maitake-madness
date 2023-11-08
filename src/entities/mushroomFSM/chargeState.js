import gp5 from "../../sketch";
import entityManager from "../../managers/entityManager";
export default class ChargeState {
    constructor(enemy) {
        this.enemy = enemy;
        this.player = entityManager.gnome;
        this.step = gp5.createVector(0, 0);
    }

    setAngle() {
        this.step.set(this.player.position.x - this.enemy.position.x, this.player.position.y - this.enemy.position.y);
        this.step.normalize();
        this.step.mult(5);
        this.enemy.velocity = this.step;
        return this.step.heading();
    }

    execute() {
        this.enemy.changeState();
    }
}