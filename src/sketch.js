import game from "./game.js"
import p5 from "p5";
import inputManager from "./input/inputManager.js";
import entityManager from "./managers/entityManager.js";

// Use instance mode for p5. This works better with Rollup and ES6 modules. https://p5js.org/reference/#/p5/p5
/**
 * 
 * @param {p5} p 
 */
let sketch = function(p) {
    let assets

    p.mouseClicked = function() {
        inputManager.onClick();
    }

    p.keyPressed = function(event) {
        inputManager.keyMap[event.keyCode] = true;
    }
    
    p.keyReleased = function(event) {
        inputManager.keyMap[event.keyCode] = false;
    }

    // Pre-load assets
    p.preload = function() {
        assets = {
            startScreenImage: p.loadImage('assets/background.jpg'),
            gnome: {
                front: p.loadImage('assets/gnome_forward.png'),
                side: p.loadImage('assets/gnome_side.png'),
                back: p.loadImage('assets/gnome_back.png')
            },
            morel: p.loadImage('assets/morel_small.png'),
            button: p.loadImage('assets/buttonshroom.png'),
            chanterelle: p.loadImage('assets/chanterelle.png'),
            fonts: {
                oldForest: p.loadFont('assets/TheOldForest.ttf')
            }
        }
    }

    // Create game and assign assets
    p.setup = function() {
        p.createCanvas(400, 400);
        game.p5 = p;
        game.assets = assets;
        game.initialize();
        entityManager.initialize();
        inputManager.setPlayer(entityManager.gnome);
    };
 
    p.draw = function() {
        switch(game.state.GAME_STATE) {
            case 0:
                p.background(assets.startScreenImage);
                break;
            case 1:
                p.background('green');
                break;
            default:
                p.background('gray');
        }
        game.update();
    };
  };

const gp5 = new p5(sketch);
export default gp5;

export const constants = {
    FOURTH_PI: gp5.HALF_PI / 2,
    THREE_FOURTHS_PI: (gp5.HALF_PI / 2) * 3
}