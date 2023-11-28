import game from "./game.js"
import p5 from "p5";
import inputManager from "./managers/inputManager.js";
import entityManager from "./managers/entityManager.js";
import tilemapManager from "./managers/tilemapManager.js";
import hudManager from "./managers/hudManager.js";
import endStateManager from "./managers/endStateManager.js";

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

    p.mousePressed = function(event) {
        inputManager.keyMap['click'] = {pressed: true};
    }

    p.mouseReleased = function(event) {
        inputManager.keyMap['click'] = {pressed: false}
    }

    p.keyPressed = function(event) {
        inputManager.keyMap[event.keyCode] = {pressed: true};
    }
    
    p.keyReleased = function(event) {
        inputManager.keyMap[event.keyCode] = {pressed: false}
    }

    // Pre-load assets
    p.preload = function() {
        assets = {
            startScreenImage: p.loadImage('assets/background.jpg'),
            gnome: {
                front: p.loadImage('assets/gnome_forward.png'),
                side: p.loadImage('assets/gnome_side.png'),
                back: p.loadImage('assets/gnome_back.png'),
                left: p.loadImage('assets/gnome_left.png'),
                right: p.loadImage('assets/gnome_right.png'),
            },
            morel: p.loadImage('assets/morel_small.png'),
            button: p.loadImage('assets/buttonshroom.png'),
            buttonActor: p.loadImage('assets/buttonshroom-actor.png'),
            chanterelle: p.loadImage('assets/chanterelle.png'),
            maitake: p.loadImage('assets/maitake.png'),
            fonts: {
                oldForest: p.loadFont('assets/TheOldForest.ttf')
            },
            tiles: {
                plainGrass: p.loadImage('assets/tiles/plain_grass.png'),
                plainDirt: p.loadImage('assets/tiles/plain_dirt.png'),
                dirtLeftGrass: p.loadImage('assets/tiles/dirt_left.png'),
                dirtRightGrass: p.loadImage('assets/tiles/dirt_right.png'),
                dirtTopGrass: p.loadImage('assets/tiles/dirt_top.png'),
                dirtBottomGrass: p.loadImage('assets/tiles/dirt_bottom.png'),
                dirtTopLeftGrass: p.loadImage('assets/tiles/dirt_top_left.png'),
                dirtTopRightGrass: p.loadImage('assets/tiles/dirt_top_right.png'),
                dirtBottomLeftGrass: p.loadImage('assets/tiles/dirt_bottom_left.png'),
                dirtBottomRightGrass: p.loadImage('assets/tiles/dirt_bottom_right.png'),
            },
            bullet: p.loadImage('assets/bullet.png'),
            spore: p.loadImage('assets/spore.png'),
            shotgun: p.loadImage('assets/shotgun.png'),
            pistol: p.loadImage('assets/pistol.png'),
            levelScreenshots: [
                p.loadImage('assets/plains.png'),
                p.loadImage('assets/plains.png')
            ]

        };
    }

    // Create game and assign assets
    p.setup = function() {
        p.createCanvas(800, 800);
        p.textSize(p.width / 32); // default text size

        game.p5 = p;
        [
            ...Object.values(assets.gnome),
            assets.morel,
            assets.bullet,
            assets.spore,
            assets.button,
            assets.chanterelle,
            assets.maitake
        ].forEach(img => img.loadPixels());
        game.assets = assets;
        game.initialize();
        entityManager.initialize();
        hudManager.initialize();
        inputManager.setPlayer(entityManager.gnome);
        endStateManager.initialize();
    };
 
    p.draw = function() {
        switch(game.state.GAME_STATE) {
            case 0:
                p.background(assets.startScreenImage);
                break;
            case 1:
                p.cursor(p.CROSS);
                tilemapManager.display();
                break;
            case 2:
                p.cursor(p.ARROW);
                tilemapManager.display();
                break;
            case 3:
                p.cursor(p.ARROW);
                tilemapManager.display();
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
    EIGHTH_PI: gp5.HALF_PI / 4,
    THREE_FOURTHS_PI: (gp5.HALF_PI / 2) * 3,
    TILEMAP_BLOCK_SIZE: 32,
}