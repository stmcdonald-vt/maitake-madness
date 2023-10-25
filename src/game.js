import MenuManager from "./menu/menuManager";

/**
 * Game object
 */
export default class Game {
    constructor(p5) {
        this.p5 = p5;
        this.menuManager = new MenuManager(p5);
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
        this.p5.square(300, 300, 20);
    }
}