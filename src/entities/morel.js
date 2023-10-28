import Game from "../game";
import Character from "./character";

/**
 * A Morel. Has no morals.
 */
class Morel extends Character {
    /**
     * 
     * @param {Game} game 
     * @param {p5.Vector} position 
     */
    constructor(game, position) {
        super(game, position, game.assets.morel);
    }

    draw() {
        this.p5.push();
        this.p5.translate(this.position.x, this.position.y);
        this.p5.image(this.image, 0, 0);
        this.p5.pop();
    }
}
export default Morel;