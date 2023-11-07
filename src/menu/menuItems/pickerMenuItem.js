import game from "../../game";
import p5 from "p5";
import gp5 from "../../sketch";

// Represents an entry in a menu that provide multiple buttons to choose from
class PickerMenuItem {
    /**
     * @param {p5.Vector} position 
     * @param {number} selectedIndex 
     */
    constructor(position, selectedIndex=0, toggleable=true) {
        this.position = position;
        this.selectedIndex = selectedIndex;
        this.buttonHeight = 30;
        this.toggleable = toggleable; // Turns the buttons into radio-like buttons
    }

    get buttonWidth() {
        const widths = this.items.map(item => gp5.textWidth(item.text));
        return Math.max(...widths) + 10;
    }

    initializePositions() {
        // Buttons and text will be written in center mode. Put the center of the buttons roughly in the center of the expected sizes.
        const startingX = this.position.x + this.buttonWidth / 2;
        const startingY = this.position.y + this.buttonHeight / 2 + 5; // +5 for a gap between section label and buttons
        this.items.forEach((item, idx) => {
            const gap = (this.buttonWidth + 10) * idx;
            item.position = gp5.createVector(startingX + gap, startingY);
        })
    }

    registerClickListeners() {
        const halfWidth = this.buttonWidth / 2;
        const halfHeight = this.buttonHeight / 2;
        this.items.forEach((item, idx) => {
            game.inputManager.registerClickFunction(() => {
                if (game.inputManager.mouseInsideBounds(
                    item.position.x - halfWidth,
                    item.position.x + halfWidth,
                    item.position.y - halfHeight,
                    item.position.y + halfHeight)
                    ){
                        this.selectedIndex = idx;
                        item.func();
                    }
            })
        })
    }

    display() {
        gp5.push();      
        if (this.label) { // Draw the section label
            gp5.fill('white');
            gp5.text(this.label, this.position.x, this.position.y);
        }
        this.items.forEach((item) => {
            let backgroundColor = this.primaryColor || gp5.color('gray');
            if (this.toggleable && item === this.items[this.selectedIndex]) {
                backgroundColor = gp5.color('white'); // style the selected button differently
            }
            // Draw the buttons
            gp5.push();
            gp5.fill(backgroundColor);
            gp5.rectMode(gp5.CENTER);
            gp5.rect(item.position.x,  item.position.y, this.buttonWidth, this.buttonHeight);
            gp5.fill(this.textColor || 'black');
            gp5.textAlign(gp5.CENTER);
            gp5.text(item.text, item.position.x, item.position.y);
            gp5.pop();
        })
        gp5.pop();
    }
}

export default PickerMenuItem;