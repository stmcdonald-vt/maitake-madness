import game from "../../game";
import gp5 from "../../sketch";
import entityManager from "../../managers/entityManager";
export default class ChaseState {
    constructor(enemy) {
        this.enemy = enemy;
        this.player = entityManager.gnome;
        this.step = gp5.createVector(0, 0);
    }

    execute() {
        this.step.set(this.player.position.x - this.enemy.position.x, this.player.position.y - this.enemy.position.y);
        this.step.normalize();
        this.enemy.velocity = this.step;
        this.enemy.target = this.player;
        this.enemy.changeState();
    }
}