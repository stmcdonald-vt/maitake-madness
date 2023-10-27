
class Tutorial {
    constructor(game, position, width, height) {
        this.p5 = game.p5;
        this.width = width;
        this.height = height;
        this.position = position;
    }

    get tutorialText() {
        return 'This is a tutorial for Maitake Madness! In this game, you will protect the magical relics of gnome society from the mushroomy aggressors. See a shroom, shoot em up, pick up more guns.... profit?'
    }

    display() {
        this.p5.push();
        this.p5.textSize(14);
        this.p5.textWrap(this.p5.WORD);
        this.p5.text(this.tutorialText, this.position.x, this.position.y, this.width, this.height);
        this.p5.pop();
    }
}

export default Tutorial;