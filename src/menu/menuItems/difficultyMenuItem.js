import PickerMenuItem from "./pickerMenuItem";

class DifficultyMenuItem extends PickerMenuItem {
    constructor(game, position) {
        super(game);
        this.game = game;
        this.p5 = game.p5;
        this.selectedIndex = 0;
        this.position = position;
        this.items = [
            {text: 'Easy'},
            {text: 'Medium'},
            {text: 'Hard'}
        ];
        this.initializePositions();
        this.registerClickListeners();
    }
}
export default DifficultyMenuItem;