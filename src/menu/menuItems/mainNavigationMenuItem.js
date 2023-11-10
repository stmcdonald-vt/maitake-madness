import game from "../../game";
import PickerMenuItem from "./pickerMenuItem";
import gp5 from "../../sketch";
import entityManager from "../../managers/entityManager";
import inputManager from "../../managers/inputManager";

// Navigation to options or start game.
class MainNavigationMenuItem extends PickerMenuItem {
    /**
     * @param {p5.Vector} position 
     */
    constructor(position) {
        super(position, 0, false);
        this.primaryColor = gp5.color('green');
        this.textColor = gp5.color('white');
        this.items = [
            {text: 'Start', func: () => {
                inputManager.clearClickFunctions();
                entityManager.setupGame();
                game.state.GAME_STATE = 1;
            }},
            {text: 'Options', func: () => {game.menuManager.setMenu(1)}},
        ];
        this.initializePositions();
        this.registerClickListeners();
    }
}
export default MainNavigationMenuItem;