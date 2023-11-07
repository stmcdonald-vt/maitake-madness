import InputManager from "./input/inputManager";
import MenuManager from "./menu/menuManager";

const game = {
    initialize: function () {
        this.inputManager = new InputManager()
        this.menuManager = new MenuManager()
    },
    update: function() {this.menuManager.display()},
    state: {
        GAME_STATE: 0, // 0: Main menu, 1: Options Menu, 2: Playing Game
        DIMENSION_MULTIPLIER: 1,
        DIFFICULTY: 1,
        MOVEMENT_SCHEME: 0,
    }
}

export default game;