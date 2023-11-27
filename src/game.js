import MenuManager from "./menu/menuManager";
import entityManager from "./managers/entityManager";
import inputManager from "./managers/inputManager";
import levels from "./data/levels.json"
import hudManager from "./managers/hudManager";
import endStateManager from "./managers/endStateManager";

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
                hudManager.display();
                break;
            case 2:
                endStateManager.showMessageCenter(`You Win!`);
                endStateManager.homeButton.display();
                break;
            case 3:
                endStateManager.showMessageCenter(`You Lose...`);
                endStateManager.homeButton.display();
                break;
        }
    },
    advanceWave: function() {
        if (levels[this.state.LEVEL].waves.length > this.state.WAVE + 1) {
            this.state.WAVE++;
            entityManager.startWave();
        } else {
            this.setWin();
        }
    },
    get wavesInLevel() {
        return levels[this.state.LEVEL].waves.length;
    },
    get currentLevel() {
        return levels[this.state.LEVEL];
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
    setWin: function () {
        inputManager.clearClickFunctions();
        this.state.GAME_STATE = 2;
        endStateManager.homeButton.registerClickListeners();
    },
    setLoss: function () {
        inputManager.clearClickFunctions();
        this.state.GAME_STATE = 3;
        endStateManager.homeButton.registerClickListeners();
    },
    resetGame: function () {
        this.state.GAME_STATE = 0;
        this.state.LEVEL = 0;
        this.state.WAVE = 0;
    },
    state: {
        GAME_STATE: 0, // 0: Start screen, 1: Game, 2: Win, 3: Loss
        DIMENSION_MULTIPLIER: 1,
        DIFFICULTY: 1,
        MOVEMENT_SCHEME: 0,
        LEVEL: 0,
        WAVE: 0
    },
}

export default game;