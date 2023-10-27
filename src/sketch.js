import Game from "./game.js"

// Use instance mode for p5. This works better with Rollup and ES6 modules. https://p5js.org/reference/#/p5/p5

/** @type {p5} */
let sketch = function(p) {
    var game;

    p.mouseClicked = function() {
        game.inputManager.onClick();
    }

    p.keyPressed = function(keyCode) {
        game.inputManager.keyMap[keyCode] = true;
    }
    
    p.keyReleased = function(keyCode) {
        game.inputManager.keyMap[keyCode] = false;
    }
    /**
     * Setup function.
     * @param {p5} p - The p5 instance.
     */
    p.setup = function() {
        p.createCanvas(400, 400);
        game = new Game(p);
    };
  
    /**
     * Draw function.
     * @param {p5} p - The p5 instance.
     */
    p.draw = function() {
        p.background(220);
        game.update();
    };
  };
  
  new p5(sketch);