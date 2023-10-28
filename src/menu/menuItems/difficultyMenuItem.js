import PickerMenuItem from "./pickerMenuItem";

// Picker for difficulty
class DifficultyMenuItem extends PickerMenuItem {
    /**
     * @param {Game} game 
     * @param {p5.Vector} position 
     */
    constructor(game, position) {
        super(game, position, game.state.DIFFICULTY);
        this.game = game;
        this.p5 = game.p5;
        this.items = [
            {text: 'Easy', func: () => game.state.DIFFICULTY = 0},
            {text: 'Medium', func: () => game.state.DIFFICULTY = 1},
            {text: 'Hard', func: () => game.state.DIFFICULTY = 2}
        ];
        this.label = "Difficulty"
        this.initializePositions();
        this.registerClickListeners();
    }
}
export default DifficultyMenuItem;