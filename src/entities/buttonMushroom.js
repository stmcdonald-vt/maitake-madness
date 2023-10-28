import Character from "./character";
import Game from "../game";
// Button mushroom. He feels nothing but emptiness.
class ButtonMushroom extends Character {
    /**
     * @param {Game} game 
     * @param {p5.Vector} position 
     */
    constructor(game, position) {
        super(game, position, game.assets.button);
    }

    draw() {
        this.p5.push();
        this.p5.translate(this.position.x, this.position.y);
        if (this.velocity.x < 0) { 
            this.p5.scale(-1,1);
            this.p5.image(this.image, -this.image.width, 0);
        } else {
            this.p5.image(this.image, 0, 0);
        }
        this.p5.pop();
    }
}
export default ButtonMushroom;