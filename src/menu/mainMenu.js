import Menu from './menu';
import PickerMenuItem from './pickerMenuItem';

class MainMenu extends Menu {

    /**
     * 
     * @param {*} p5 - p5 instance
     * @param {p5.Vector} topLeft - top left constraint of menu area
     * @param {p5.Vector} bottomRight - bottom right constraint of menu area
     */
    constructor(p5, topLeft, bottomRight) {
        super(p5);
        this.p5 = p5;
        this.items = [
            new PickerMenuItem(p5, ['Hello', 'World', 'Friend'], p5.createVector(200, 200))
        ]
    }

    display() {
        this.items.forEach(item => item.display());
    }
}
export default MainMenu;