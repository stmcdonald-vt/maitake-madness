import MushroomChaseAnimation from './animations/mushroomChaseAnimation';
import Menu from './menu';
import MainNavigationMenuItem from './menuItems/mainNavigationMenuItem';
import Title from './title';

class MainMenu extends Menu {
    /**
     * @param {*} p5 - p5 instance
     */
    constructor(game) {
        super(game.p5);
        this.p5 = game.p5;
        const buttonPosition = this.p5.createVector(125, 200);
        const titlePosition = this.p5.createVector(200, 100);
        const animationPosition = this.p5.createVector(0, 300);
        this.items = [
            new MainNavigationMenuItem(game, buttonPosition),
            new Title(game, titlePosition),
            new MushroomChaseAnimation(game, animationPosition),
        ]
    }

    display() {
        super.display();
        // Also display author text which doesn't warrant a component
        this.p5.push();
        this.p5.fill('white');
        this.p5.text('Built by: Sean McDonald', 0, 390);
        this.p5.pop();
    }
}
export default MainMenu;