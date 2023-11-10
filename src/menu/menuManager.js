import MainMenu from "./mainMenu"
import OptionsMenu from "./optionsMenu"
import game from "../game"
import inputManager from "../managers/inputManager"
/**
 * Instantiate and manage all of the menus
 */
class MenuManager {
    constructor() {
        this.menus = [
            new MainMenu(),
            new OptionsMenu()
        ]
        this.currentMenuIndex = 0;
    }

    setMenu(value) {
        inputManager.clearClickFunctions();
        this.currentMenuIndex = value;
        this.menus[this.currentMenuIndex].reset();
    }

    display() {
        this.menus[this.currentMenuIndex].display();
    }
}
export default MenuManager