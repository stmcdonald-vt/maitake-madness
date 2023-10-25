/**
 * Game object
 */
class Game {
    constructor(p5) {
        this.p5 = p5;
    }

    update() {
        this.p5.circle(200, 200, 100);
    }
}
export default Game;