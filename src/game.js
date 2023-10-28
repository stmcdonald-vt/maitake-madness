import InputManager from "./input/inputManager";
import MenuManager from "./menu/menuManager";

/**
 * Game object
 */
export default class Game {
    constructor(p5, assets) {
        this.p5 = p5;
        this.assets = assets;
        this.initializeState();
        this.inputManager = new InputManager(this);
        this.menuManager = new MenuManager(this);
    }

    update() {
        this.menuManager.display();
    }

    // Configurable values, some can be changed in options.
    initializeState() {
        this.state = {
            GAME_STATE: 0, // 0: Main menu, 1: Options Menu, 2: Playing Game
            DIMENSION_MULTIPLIER: 1,
            DIFFICULTY: 1,
            MOVEMENT_SCHEME: 0,
        }
    }
}