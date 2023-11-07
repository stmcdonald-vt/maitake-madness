import PickerMenuItem from "./pickerMenuItem";
import game from "../../game";
// Picker for the different control schemes
class ControlMenuItem extends PickerMenuItem {
    /**
     * @param {p5.Vector} position 
     */
    constructor(position) {
        super();
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