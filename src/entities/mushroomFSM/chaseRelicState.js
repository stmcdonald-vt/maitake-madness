import gp5 from "../../sketch";
import entityManager from "../../managers/entityManager";
export default class ChaseRelicState {
    constructor(enemy) {
        this.enemy = enemy;
        this.step = gp5.createVector(0, 0);
    }

    findClosestRelic() {
        let closest;
        let closestDist;

        entityManager.relics.forEach(relic => {
            const newDist = gp5.dist(relic.position.x, relic.position.y, this.enemy.position.x, this.enemy.position.y);
            if (!closest || newDist < closestDist) { // closest relic has min distance
                closest = relic;
                closestDist = newDist;
            }
        })

        return closest;
    }

    execute() {
        const closestRelic = this.findClosestRelic();
        this.enemy.target = closestRelic;
        this.step.set(closestRelic.position.x - this.enemy.position.x, closestRelic.position.y - this.enemy.position.y);
        this.step.normalize();
        this.enemy.velocity = this.step;
        this.enemy.changeState();
    }
}