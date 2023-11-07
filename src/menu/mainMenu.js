import MushroomChaseAnimation from './animations/mushroomChaseAnimation';
import Menu from './menu';
import MainNavigationMenuItem from './menuItems/mainNavigationMenuItem';
import Title from './title';
import gp5 from '../sketch';
import game from '../game';

class MainMenu extends Menu {
    constructor() {
        super();
        const buttonPosition = gp5.createVector(125, 200);
        const titlePosition = gp5.createVector(200, 100);
        const animationPosition = gp5.createVector(0, 300);
        this.items = [
            new MainNavigationMenuItem(buttonPosition),
            new Title(titlePosition),
            new MushroomChaseAnimation(animationPosition),
        ]
    }

    display() {
        super.display();
        // Also display author text which doesn't warrant a component
        gp5.push();
        gp5.fill('white');
        gp5.text('Built by: Sean McDonald', 0, 390);
        gp5.pop();
    }
}
export default MainMenu;