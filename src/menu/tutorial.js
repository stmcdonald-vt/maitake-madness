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
    constructor(position, width, height) {
        this.width = width;
        this.height = height;
        this.position = position;
    }

    get tutorialText() {
        return `As Gerome the Gnome, you are tasked with protecting gnomish relics from fungal aggressors. You will have plenty of weaponry at your disposal that you can switch between using the 'Q' key. You will use ${game.state.MOVEMENT_SCHEME ? 'the ARROW KEYS' : 'WASD'} to control Gerome. 
        
        You will use your mouse to aim and left click to shoot your weapon. It is highly recommended to use a mouse for aiming rather than a laptop touchpad.`
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