import game from "../game";
import Character from "./character";
import gp5 from "../sketch";

/**
 * A Morel. Has no morals.
 */
class Morel extends Character {
    /**
     * 
     * @param {p5.Vector} position 
     */
    constructor(position) {
        super(position, game.assets.morel);
    }

    draw() {
        gp5.push();
        gp5.translate(this.position.x, this.position.y);
        gp5.image(this.image, 0, 0);
        gp5.pop();
    }
}
export default Morel;