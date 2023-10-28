import Game from "../../game";
import PickerMenuItem from "./pickerMenuItem";

// Navigation to options or start game.
class MainNavigationMenuItem extends PickerMenuItem {
    /**
     * @param {Game} game 
     * @param {p5.Vector} position 
     */
    constructor(game, position) {
        super(game, position, 0, false);
        this.game = game;
        this.p5 = game.p5;
        this.primaryColor = this.p5.color('green');
        this.textColor = this.p5.color('white');
        this.items = [
            {text: 'Start', func: () => game.state.GAME_STATE = 2},
            {text: 'Options', func: () => game.menuManager.currentMenuIndex = 1},
        ];
        this.initializePositions();
        this.registerClickListeners();
    }
}
export default MainNavigationMenuItem;