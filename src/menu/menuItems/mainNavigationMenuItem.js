import game from "../../game";
import PickerMenuItem from "./pickerMenuItem";
import gp5 from "../../sketch";

// Navigation to options or start game.
class MainNavigationMenuItem extends PickerMenuItem {
    /**
     * @param {Game} game 
     * @param {p5.Vector} position 
     */
    constructor(position) {
        super(position, 0, false);
        this.primaryColor = gp5.color('green');
        this.textColor = gp5.color('white');
        this.items = [
            {text: 'Start', func: () => game.state.GAME_STATE = 2},
            {text: 'Options', func: () => game.menuManager.currentMenuIndex = 1},
        ];
        this.initializePositions();
        this.registerClickListeners();
    }
}
export default MainNavigationMenuItem;