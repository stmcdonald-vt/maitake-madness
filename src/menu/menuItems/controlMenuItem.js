import PickerMenuItem from "./pickerMenuItem";

// Picker for the different control schemes
class ControlMenuItem extends PickerMenuItem {
    /**
     * @param {Game} game 
     * @param {p5.Vector} position 
     */
    constructor(game, position) {
        super(game);
        this.game = game;
        this.p5 = game.p5;
        this.selectedIndex = 0;
        this.position = position;
        this.items = [
            {text: 'WASD', func: () => game.state.MOVEMENT_SCHEME = 0},
            {text: 'Arrows', func: () => game.state.MOVEMENT_SCHEME = 1},
        ];
        this.label = "Controls";
        this.initializePositions();
        this.registerClickListeners();
    }
}
export default ControlMenuItem;