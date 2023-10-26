import MainMenu from "./mainMenu"
import OptionsMenu from "./optionsMenu"

/**
 * Instantiate and manage all of the menus
 */
class MenuManager {
    /**
     * 
     * @param {*} game - Game instance
     */
    constructor(game) {
        this.p5 = game.p5;
        this.menus = [
            new MainMenu(game, this.p5.createVector(50, 200)),
            new OptionsMenu(game)
        ]
        this.config = game.config;
        this.currentMenuIndex = 0;
    }

    display() {
        this.menus[this.currentMenuIndex].display();
    }
}
export default MenuManager