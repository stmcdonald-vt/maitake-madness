import p5 from "p5";
import game from "../game";
import gp5 from "../sketch";

// Title text
class Title {
    /**
     * @param {p5.Vector} position 
     */
    constructor(position) {
        this.position = position;
        this.text = "Maitake Madness"
    }

    display() {
        gp5.push();
        gp5.textSize(gp5.width / 10);
        gp5.textAlign(gp5.CENTER);
        gp5.textWrap(gp5.WORD);
        gp5.textFont(game.assets.fonts.oldForest)
        gp5.fill('white')
        gp5.text(this.text, this.position.x, this.position.y);
        gp5.pop();
    }
}

export default Title;