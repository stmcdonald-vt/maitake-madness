import Game from "../game";

// Title text
class Title {
    /**
     * @param {Game} game 
     * @param {p5.Vector} position 
     */
    constructor(game, position) {
        this.p5 = game.p5;
        this.game = game;
        this.position = position;
        this.text = "Maitake Madness"
    }

    display() {
        this.p5.push();
        this.p5.textSize(48);
        this.p5.textAlign(this.p5.CENTER);
        this.p5.textWrap(this.p5.WORD);
        this.p5.textFont(this.game.assets.fonts.oldForest)
        this.p5.fill('white')
        this.p5.text(this.text, this.position.x, this.position.y);
        this.p5.pop();
    }
}

export default Title;