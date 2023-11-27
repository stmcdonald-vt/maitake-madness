import game from '../game';
import GnomeChaseAnimation from './animations/gnomeChaseAnimation';
import Button from './button';
import Menu from './menu';
import ControlMenuItem from './menuItems/controlMenuItem';
import DifficultyMenuItem from './menuItems/difficultyMenuItem';
import Tutorial from './tutorial';
import gp5 from '../sketch';

class OptionsMenu extends Menu {
    constructor() {
        super();

        const optionsPosition = gp5.createVector(20, gp5.height * 0.5);
        const tutorialPosition = gp5.createVector(gp5.width * 0.05, gp5.height * 0.1);
        const animationPosition = gp5.createVector(0, gp5.height * 0.8);

        // Back button setup
        const backButtonPosition = gp5.createVector(20, 20);
        const backButtonHeight = 30;
        const backButtonWidth = 30;
        const backButtonAction = () => game.menuManager.setMenu(0);

        const backButtonDisplay = () => {
            gp5.push();
            gp5.noStroke();
            gp5.fill('white');
            gp5.translate(backButtonPosition.x + backButtonWidth / 2, backButtonPosition.y + backButtonHeight / 2);
            gp5.triangle(-15, 0, 0, 7, 0, -7);
            gp5.rect(0, -3, 10, 6)
            gp5.pop();
        };

        const tutorialText = `As Gerome the Gnome, you are tasked with protecting gnomish relics from fungal aggressors. You will have plenty of weaponry at your disposal that you can switch between using the 'Q' key. You will use ${game.state.MOVEMENT_SCHEME ? 'the ARROW KEYS' : 'WASD'} to control Gerome. 
            
            You will use your mouse to aim and left click to shoot your weapon. It is highly recommended to use a mouse for aiming rather than a laptop touchpad.`

        this.items = [
            new DifficultyMenuItem(game.p5.createVector(optionsPosition.x, optionsPosition.y)),
            new ControlMenuItem(game.p5.createVector(optionsPosition.x, optionsPosition.y + 100)),
            new Button(backButtonPosition, backButtonAction, backButtonHeight, backButtonWidth, undefined, backButtonDisplay),
            new Tutorial(tutorialPosition, gp5.width * 0.9, gp5.height * 0.3, tutorialText),
            new GnomeChaseAnimation(animationPosition)
        ]
    }

    reset() {
        this.items.slice(0,3).forEach(item => item.registerClickListeners());
    }
}
export default OptionsMenu;