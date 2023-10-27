
class Title {
    constructor(game, position) {
        this.p5 = game.p5;
        this.position = position;
        this.text = "Maitake Madness"
    }

    display() {
        this.p5.push();
        this.p5.textSize(36);
        this.p5.textAlign(this.p5.CENTER);
        this.p5.textWrap(this.p5.WORD);
        this.p5.fill('white')
        this.p5.text(this.text, this.position.x, this.position.y);
        this.p5.pop();
    }
}

export default Title;