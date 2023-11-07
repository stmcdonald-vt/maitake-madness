import MainMenu from "./mainMenu"
import OptionsMenu from "./optionsMenu"
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

    display() {
        this.menus[this.currentMenuIndex].display();
    }
}
export default MenuManager