import PickerMenuItem from "./pickerMenuItem";

class ControlMenuItem extends PickerMenuItem {
    /**
     * 
     * @param {Game} game 
     * @param {*} position 
     */
    constructor(game, position) {
        super(game);
        this.game = game;
        this.p5 = game.p5;
        this.selectedIndex = 0;
        this.position = position;
        this.items = [
            {text: 'WASD', func: () => game.config.MOVEMENT_SCHEME = 0},
            {text: 'Arrows', func: () => game.config.MOVEMENT_SCHEME = 1},
        ];
        this.label = "Controls";
        this.initializePositions();
        this.registerClickListeners();
    }
}
export default ControlMenuItem;