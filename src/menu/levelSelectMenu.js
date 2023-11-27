import game from "../game";
import gp5 from "../sketch";
import Tutorial from "./tutorial";
import Menu from "./menu";
import LevelPreview from "./levelPreview";
import ConfirmLevelMenuItem from "./menuItems/confirmLevelMenuItem";
import levels from "../data/levels.json";
import Button from "./button";

export default class LevelSelectMenu extends Menu{
    // Don't forget to do this on start:
    // entityManager.setupGame();
    // game.state.GAME_STATE = 1;
    constructor() {
        super();
        // Screenshot center top, description below, start below that, arrows on left and right
        const previewPosition = gp5.createVector(gp5.width * 0.2, gp5.height * 0.1);
        const descriptionPosition = gp5.createVector(gp5.width * 0.05, gp5.height * 0.75);
        const buttonPosition = gp5.createVector(gp5.width * 0.45, gp5.height * 0.85);

        // back button setup
        const backButtonPosition = gp5.createVector(gp5.width * 0.1 - 30, gp5.height * 0.5);
        const backButtonHeight = 30;
        const backButtonWidth = 30;
        const backButtonAction = () => {
            if (game.state.LEVEL > 0) {
                game.state.LEVEL--;
                this.updateLevel();
            }
        }
        const backButtonDisplay = () => {
            if (game.state.LEVEL > 0) {
                gp5.push();
                gp5.noStroke();
                gp5.fill('white');
                gp5.translate(backButtonPosition.x + backButtonWidth / 2, backButtonPosition.y + backButtonHeight / 2);
                gp5.triangle(-15, 0, 0, 7, 0, -7);
                gp5.rect(0, -3, 10, 6)
                gp5.pop();
            }
        };

        // forward button setup
        const forwardButtonPosition = gp5.createVector(gp5.width * 0.9, gp5.height * 0.5);
        const forwardButtonHeight = 30;
        const forwardButtonWidth = 30;
        const forwardButtonAction = () => {
            if (game.state.LEVEL < levels.length - 1) {
                game.state.LEVEL++;
                this.updateLevel();
            }
        }

        const forwardButtonDisplay = () => {
            if (game.state.LEVEL < levels.length - 1) {
                gp5.push();
                gp5.noStroke();
                gp5.fill('white');
                gp5.translate(forwardButtonPosition.x + forwardButtonWidth / 2, forwardButtonPosition.y + forwardButtonHeight / 2);
                gp5.triangle(15, 0, 0, 7, 0, -7);
                gp5.rect(-10, -3, 10, 6)
                gp5.pop();
            }
        };


        this.items = [
            new LevelPreview(previewPosition, this.levelPreviewImage, gp5.width * 0.6, gp5.width * 0.6),
            new Tutorial(descriptionPosition, gp5.width * 0.9, gp5.height * 0.1, this.descriptionText),
            new ConfirmLevelMenuItem(buttonPosition),
            new Button(backButtonPosition, backButtonAction, backButtonHeight, backButtonWidth, undefined, backButtonDisplay),
            new Button(forwardButtonPosition, forwardButtonAction, forwardButtonHeight, forwardButtonWidth, undefined, forwardButtonDisplay),
        ]
    }

    reset() {
        this.items[2].registerClickListeners();
        this.items[3].registerClickListeners();
        this.items[4].registerClickListeners();

    }

    updateLevel() {
        this.items[0].image = this.levelPreviewImage;
        this.items[1].tutorialText = this.descriptionText;
    }

    get descriptionText() {
        return `${game.currentLevel.name}: ${game.currentLevel.description}`;
    }

    get levelPreviewImage() {
        return game.assets.levelScreenshots[game.state.LEVEL];
    }
}