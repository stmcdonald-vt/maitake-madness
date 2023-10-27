import PickerMenuItem from "./pickerMenuItem";

class DifficultyMenuItem extends PickerMenuItem {
    constructor(game, position) {
        super(game);
        this.game = game;
        this.p5 = game.p5;
        this.selectedIndex = 0;
        this.position = position;
        this.items = [
            {text: 'Easy', func: () => game.config.DIFFICULTY = 0},
            {text: 'Medium', func: () => game.config.DIFFICULTY = 1},
            {text: 'Hard', func: () => game.config.DIFFICULTY = 2}
        ];
        this.label = "Difficulty"
        this.initializePositions();
        this.registerClickListeners();
    }
}
export default DifficultyMenuItem;