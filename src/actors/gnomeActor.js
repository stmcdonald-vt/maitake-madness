import Actor from "./Actor";
import game from "../game";
import gp5 from "../sketch";
/**
 * Gnome class to represent Gerome.
 */
class GnomeActor extends Actor{
    /**
     * 
     * @param {p5.Vector} position 
     */
    constructor(position) {
        super(position, game.assets.gnome.side);
    }

    draw() {
        gp5.push();
        gp5.translate(this.position.x, this.position.y);
        if (this.velocity.x < 0) { 
            gp5.scale(-1,1);
            gp5.image(this.image, -this.image.width, 0);
        } else {
            gp5.image(this.image, 0, 0);
        }
        gp5.pop();
    }
}
export default GnomeActor;