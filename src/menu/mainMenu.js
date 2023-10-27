import Menu from './menu';
import MainNavigationMenuItem from './menuItems/mainNavigationMenuItem';
import Title from './title';

class MainMenu extends Menu {

    /**
     * 
     * @param {*} p5 - p5 instance
     */
    constructor(game) {
        super(game.p5);
        this.p5 = game.p5;
        const buttonPosition = this.p5.createVector(125, 200);
        const titlePosition = this.p5.createVector(200, 100);
        this.items = [
            new MainNavigationMenuItem(game, buttonPosition),
            new Title(game, titlePosition)
        ]
    }
}
export default MainMenu;