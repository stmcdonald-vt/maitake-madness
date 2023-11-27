import game from "../game";
import p5 from "p5";
import gp5 from "../sketch";

// Tutorial text for options menu
class Tutorial {
    /**
     * @param {p5.Vector} position 
     * @param {number} width 
     * @param {number} height 
     */
    constructor(position, width, height, text) {
        this.width = width;
        this.height = height;
        this.position = position;
        this.tutorialText = text;
    }

    display() {
        gp5.push();
        gp5.noStroke();
        gp5.fill('rgba(0,0,0,0.4)'); // Transparent square behind for readability
        gp5.rect(this.position.x -5, this.position.y - 5, this.width, this.height)
        gp5.textSize(20);
        gp5.textWrap(gp5.WORD);
        gp5.fill('white');
        gp5.text(this.tutorialText, this.position.x, this.position.y, this.width, this.height);
        gp5.pop();
    }
}
export default Tutorial;