import Menu from './menu';
import DifficultyMenuItem from './menuItems/difficultyMenuItem';

class MainMenu extends Menu {

    /**
     * 
     * @param {*} p5 - p5 instance
     * @param {p5.Vector} topLeft - top left constraint of menu area
     * @param {p5.Vector} bottomRight - bottom right constraint of menu area
     */
    constructor(game, topLeft) {
        super(game.p5);
        this.p5 = game.p5;
        this.items = [
            new DifficultyMenuItem(game, game.p5.createVector(topLeft.x, topLeft.y)),
            // new PickerMenuItem(game, ['WASD', "Arrow Keys"], game.p5.createVector(topLeft.x, topLeft.y + 60))
        ]
    }

    display() {
        this.items.forEach(item => item.display());
    }
}
export default MainMenu;