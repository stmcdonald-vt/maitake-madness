import MainMenu from "./mainMenu"
import OptionsMenu from "./optionsMenu"

/**
 * Instantiate and manage all of the menus
 */
class MenuManager {
    /**
     * 
     * @param {*} p5 - Instance of p5 to use for p5 functions
     */
    constructor(p5) {
        this.p5 = p5;
        this.menus = [
            new MainMenu(p5),
            new OptionsMenu(p5)
        ]
        this.currentMenuIndex = 0;
    }

    display() {
        this.menus[this.currentMenuIndex].display();
    }
}
export default MenuManager