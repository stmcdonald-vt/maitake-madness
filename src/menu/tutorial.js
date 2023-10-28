import Game from "../game";

// Tutorial text for options menu
class Tutorial {
    /**
     * @param {Game} game 
     * @param {p5.Vector} position 
     * @param {number} width 
     * @param {number} height 
     */
    constructor(game, position, width, height) {
        this.p5 = game.p5;
        this.game = game;
        this.width = width;
        this.height = height;
        this.position = position;
    }

    get tutorialText() {
        return `As Gerome the Gnome, you are tasked with protecting gnomish relics from fungal aggressors. You will have plenty of weaponry at your disposal. You will use ${this.game.state.MOVEMENT_SCHEME ? 'the ARROW KEYS' : 'WASD'} to control Gerome. You will use your mouse to aim and left click to shoot your weapon.`
    }

    display() {
        this.p5.push();
        this.p5.noStroke();
        this.p5.fill('rgba(0,0,0,0.4)'); // Transparent square behind for readability
        this.p5.rect(this.position.x -5, this.position.y - 5, this.width, this.height)
        this.p5.textSize(14);
        this.p5.textWrap(this.p5.WORD);
        this.p5.fill('white');
        this.p5.text(this.tutorialText, this.position.x, this.position.y, this.width, this.height);
        this.p5.pop();
    }
}
export default Tutorial;