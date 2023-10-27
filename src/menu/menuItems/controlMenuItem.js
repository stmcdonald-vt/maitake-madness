import PickerMenuItem from "./pickerMenuItem";

class ControlMenuItem extends PickerMenuItem {
    constructor(game, position) {
        super(game);
        this.game = game;
        this.p5 = game.p5;
        this.selectedIndex = 0;
        this.position = position;
        this.items = [
            {text: 'WASD', func: () => game.config.DIFFICULTY = 0},
            {text: 'Arrows', func: () => game.config.DIFFICULTY = 1},
        ];
        this.label = "Controls";
        this.initializePositions();
        this.registerClickListeners();
    }
}
export default ControlMenuItem;