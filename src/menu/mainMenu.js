import Menu from './menu';
import MainNavigationMenuItem from './menuItems/mainNavigationMenuItem';

class MainMenu extends Menu {

    /**
     * 
     * @param {*} p5 - p5 instance
     */
    constructor(game) {
        super(game.p5);
        this.p5 = game.p5;
        this.position = this.p5.createVector(125, 300)
        this.items = [
            new MainNavigationMenuItem(game, this.position)
        ]
    }
}
export default MainMenu;