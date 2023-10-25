import Game from "./game.js"

// Use instance mode for p5. This works better with Rollup and ES6 modules. https://p5js.org/reference/#/p5/p5
new p5((p5) => {
    let game;
	p5.setup = () => {
        p5.createCanvas(400, 400);
        game = new Game(p5);
    }
      
    p5.draw = () => {
        p5.background(220);
        game.update();
    }
})