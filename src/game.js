import InputManager from "./input/inputManager";
import MenuManager from "./menu/menuManager";

const game = {
    initialize: function () {
        this.inputManager = new InputManager()
        this.menuManager = new MenuManager()
    },
    update: function() {
        switch (this.state.GAME_STATE) {
            case 0: 
                this.menuManager.display();
                break;
            case 1:
                break;
        }
        
    },
    state: {
        GAME_STATE: 0, // 0: Start screen, 1: Game
        DIMENSION_MULTIPLIER: 1,
        DIFFICULTY: 1,
        MOVEMENT_SCHEME: 0,
    }
}

export default game;