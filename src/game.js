import MenuManager from "./menu/menuManager";
import entityManager from "./managers/entityManager";
import inputManager from "./managers/inputManager";
import levels from "./data/levels.json"

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
    advanceWave: function() {
        if (levels[this.state.LEVEL].waves.length > this.state.WAVE + 1) {
            this.state.WAVE++;
            entityManager.startWave();
        }
    },
    enemyHealthMultiplier: function() {
        switch(this.state.DIFFICULTY) {
            case 0:
                return 0.75;
            case 1:
                return 1;
            case 2:
                return 1.25;
        }
    },
    state: {
        GAME_STATE: 0, // 0: Start screen, 1: Game
        DIMENSION_MULTIPLIER: 1,
        DIFFICULTY: 1,
        MOVEMENT_SCHEME: 0,
        LEVEL: 0,
        WAVE: 0
    },
}

export default game;