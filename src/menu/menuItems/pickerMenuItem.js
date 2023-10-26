import MenuItem from "./menuItem";

class PickerMenuItem extends MenuItem {
    constructor(game, position, selectedIndex=0) {
        super(game);
        this.p5 = game.p5;
        this.position = position;
        this.selectedIndex = selectedIndex;
        this.buttonHeight = 30;
    }

    get buttonWidth() {
        const widths = this.items.map(item => this.p5.textWidth(item.text));
        return Math.max(...widths) + 10;
    }

    initializePositions() {
        this.items.forEach((item, idx) => {
            const gap = (this.buttonWidth + 10) * idx;
            item.position = this.p5.createVector(this.position.x + gap, this.position.y);
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
                    }
            })
        })
    }

    display() {
        this.items.forEach((item, idx) => {
            let backgroundColor = this.p5.color('gray');
            if (item === this.items[this.selectedIndex]) {
                backgroundColor = this.p5.color('white');
            }
            const gap = (this.buttonWidth + 10) * idx;

            this.p5.push();
            this.p5.fill(backgroundColor);
            this.p5.rectMode(this.p5.CENTER);
            this.p5.rect(item.position.x,  item.position.y, this.buttonWidth, this.buttonHeight);
            this.p5.fill('black');
            this.p5.textAlign(this.p5.CENTER);
            this.p5.text(item.text, item.position.x, item.position.y);
            this.p5.pop();
        })
    }
}

export default PickerMenuItem;