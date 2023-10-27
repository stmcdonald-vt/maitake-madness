import Game from '../game';
import Button from './button';
import Menu from './menu';
import ControlMenuItem from './menuItems/controlMenuItem';
import DifficultyMenuItem from './menuItems/difficultyMenuItem';
import Tutorial from './tutorial';

class OptionsMenu extends Menu {
    /**
     * 
     * @param {Game} game 
     */
    constructor(game) {
        super(game.p5);
        this.p5 = game.p5;

        const optionsPosition = this.p5.createVector(20, 300);
        const tutorialPosition = this.p5.createVector(20, 100);

        // Back button setup
        const backButtonPosition = this.p5.createVector(20, 20);
        const backButtonHeight = 30;
        const backButtonWidth = 30;
        const backButtonAction = () => game.menuManager.currentMenuIndex = 0;

        const backButtonDisplay = () => {
            this.p5.push();
            this.p5.noStroke();
            this.p5.fill('black');
            this.p5.translate(backButtonPosition.x + backButtonWidth / 2, backButtonPosition.y + backButtonHeight / 2);
            this.p5.triangle(-15, 0, 0, 7, 0, -7);
            this.p5.rect(0, -3, 10, 6)
            this.p5.pop();
        };

        this.items = [
            new DifficultyMenuItem(game, game.p5.createVector(optionsPosition.x, optionsPosition.y)),
            new ControlMenuItem(game, game.p5.createVector(optionsPosition.x, optionsPosition.y + 50)),
            new Button(game, backButtonPosition, backButtonAction, backButtonHeight, backButtonWidth, undefined, backButtonDisplay),
            new Tutorial(game, tutorialPosition, 300, 200)
        ]
    }
}
export default OptionsMenu;