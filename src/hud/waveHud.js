import gp5 from "../sketch";
import game from "../game";

export default class WaveHud {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        const wave = game.state.WAVE + 1;
        gp5.push();
        gp5.fill('black');
        gp5.textAlign(gp5.RIGHT);
        gp5.text(`Wave: ${wave}/${game.wavesInLevel}`, this.x, this.y);
        gp5.pop();
    }
}