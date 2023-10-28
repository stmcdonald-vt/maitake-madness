import Game from "../game";
import Character from "./character";
// A chanterelle. Fancy.
class Chanterelle extends Character {
    /**
     * 
     * @param {Game} game 
     * @param {p5.Vector} position 
     */
    constructor(game, position) {
        super(game, position, game.assets.chanterelle);
    }

    draw() {
        this.p5.push();
        this.p5.translate(this.position.x, this.position.y);
        if (this.velocity.x > 0) { // Eyes are toward left, so the flip logic is reverse compared to gnome
            this.p5.scale(-1,1);
            this.p5.image(this.image, -this.image.width, 0);
        } else {
            this.p5.image(this.image, 0, 0);
        }
        this.p5.pop();
    }
}
export default Chanterelle;