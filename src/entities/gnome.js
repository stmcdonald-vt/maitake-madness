import Character from "./character";

/**
 * Gnome class to represent Gerome.
 */
class Gnome extends Character{
    /**
     * 
     * @param {Game} game 
     * @param {p5.Vector} position 
     */
    constructor(game, position) {
        super(game, position, game.assets.gnome.side);
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
export default Gnome;