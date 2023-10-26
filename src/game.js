import InputManager from "./input/inputManager";
import MenuManager from "./menu/menuManager";

/**
 * Game object
 */
export default class Game {
    constructor(p5) {
        this.p5 = p5;
        this.inputManager = new InputManager(this);
        this.menuManager = new MenuManager(this);
        this.initializeConfig();
    }

    update() {
        this.menuManager.display();
    }

    // Configurable values, some can be changed in options.
    initializeConfig() {
        this.config = {
            DIMENSION_MULTIPLIER: 1,
            ANOTHER_VALUE: 2
        }
    }
}