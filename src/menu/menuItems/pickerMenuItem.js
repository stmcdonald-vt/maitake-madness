import MenuItem from "./menuItem";

class PickerMenuItem extends MenuItem {
    constructor(game, position, selectedIndex=0) {
        super(game);
        this.p5 = game.p5;
        this.position = position;
        this.selectedIndex = selectedIndex;
        this.buttonHeight = 30;
        this.toggleable = true;
    }

    get buttonWidth() {
        const widths = this.items.map(item => this.p5.textWidth(item.text));
        return Math.max(...widths) + 10;
    }

    initializePositions() {
        // Buttons and text will be written in center mode. Put the center of the buttons roughly in the center of the expected sizes.
        const startingX = this.position.x + this.buttonWidth / 2;
        const startingY = this.position.y + this.buttonHeight / 2 + 5; // +5 for a gap between section label and buttons
        this.items.forEach((item, idx) => {
            const gap = (this.buttonWidth + 10) * idx;
            item.position = this.p5.createVector(startingX + gap, startingY);
        })
    }

    registerClickListeners() {
        const halfWidth = this.buttonWidth / 2;
        const halfHeight = this.buttonHeight / 2;
        this.items.forEach((item, idx) => {
            this.game.inputManager.registerClickFunction(() => {
                if (this.game.inputManager.mouseInsideBounds(
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
        this.p5.push();
        
        if (this.label) {
            this.p5.fill('white');
            this.p5.text(this.label, this.position.x, this.position.y);
        
        }
        this.items.forEach((item) => {
            let backgroundColor = this.primaryColor || this.p5.color('gray');
            if (this.toggleable && item === this.items[this.selectedIndex]) {
                backgroundColor = this.p5.color('white');
            }

            this.p5.push();
            this.p5.fill(backgroundColor);
            this.p5.rectMode(this.p5.CENTER);
            this.p5.rect(item.position.x,  item.position.y, this.buttonWidth, this.buttonHeight);
            this.p5.fill(this.textColor || 'black');
            this.p5.textAlign(this.p5.CENTER);
            this.p5.text(item.text, item.position.x, item.position.y);
            this.p5.pop();
        })
        this.p5.pop();
    }
}

export default PickerMenuItem;