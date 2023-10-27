import Game from "../../game";
import PickerMenuItem from "./pickerMenuItem";

class MainNavigationMenuItem extends PickerMenuItem {
    /**
     * 
     * @param {Game} game 
     * @param {p5.Vector} position 
     */
    constructor(game, position) {
        super(game);
        this.game = game;
        this.p5 = game.p5;
        this.selectedIndex = 0;
        this.position = position;
        this.toggleable = false;
        this.primaryColor = this.p5.color('green');
        this.textColor = this.p5.color('white');
        this.items = [
            {text: 'Start', func: () => game.config.GAME_STATE = 2},
            {text: 'Options', func: () => game.menuManager.currentMenuIndex = 1},
        ];
        this.initializePositions();
        this.registerClickListeners();
    }
}
export default MainNavigationMenuItem;