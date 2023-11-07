import game from "../game";
import Actor from "./Actor";
import gp5 from "../sketch";
// A chanterelle. Fancy.
class ChanterelleActor extends Actor {
    /**
     * 
     * @param {p5.Vector} position 
     */
    constructor(position) {
        super(position, game.assets.chanterelle);
    }

    draw() {
        gp5.push();
        gp5.translate(this.position.x, this.position.y);
        if (this.velocity.x > 0) { // Eyes are toward left, so the flip logic is reverse compared to gnome
            gp5.scale(-1,1);
            gp5.image(this.image, -this.image.width, 0);
        } else {
            gp5.image(this.image, 0, 0);
        }
        gp5.pop();
    }
}
export default ChanterelleActor;