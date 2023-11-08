import MenuManager from "./menu/menuManager";
import entityManager from "./managers/entityManager";
import inputManager from "./input/inputManager";

const game = {
    initialize: function () {
        this.menuManager = new MenuManager();
    },
    update: function() {
        switch (this.state.GAME_STATE) {
            case 0: 
                this.menuManager.display();
                break;
            case 1:
                entityManager.update();
                inputManager.processInputs();
                break;
        }
    },
    state: {
        GAME_STATE: 0, // 0: Start screen, 1: Game
        DIMENSION_MULTIPLIER: 1,
        DIFFICULTY: 1,
        MOVEMENT_SCHEME: 0,
        LEVEL: 0        
    },
}

export default game;