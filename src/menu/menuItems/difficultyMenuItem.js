import PickerMenuItem from "./pickerMenuItem";
import game from "../../game"

// Picker for difficulty
class DifficultyMenuItem extends PickerMenuItem {
    /**
     * @param {p5.Vector} position 
     */
    constructor(position) {
        super(position, game.state.DIFFICULTY);
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