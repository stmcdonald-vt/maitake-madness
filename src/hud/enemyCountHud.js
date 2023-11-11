import entityManager from "../managers/entityManager";
import gp5 from "../sketch";

export default class EnemyCountHud {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        gp5.push();
        gp5.fill('black');
        gp5.textAlign(gp5.RIGHT);
        gp5.text(`Mushrooms Left: ${entityManager.mushrooms.length}`, this.x, this.y);
        gp5.pop();
    }
}