import MenuItem from "./menuItem";

class PickerMenuItem extends MenuItem {
    constructor(p5, items, position, selectedIndex=0) {
        super(p5);
        this.p5 = p5;
        this.items = items;
        this.position = position;
        this.selectedIndex = selectedIndex;
    }

    display() {
        this.items.forEach((item, idx) => {
            let backgroundColor = this.p5.color('gray');
            if (item === this.items[this.selectedIndex]) {
                backgroundColor = this.p5.color('white');
            }

            this.p5.push();
            this.p5.fill(backgroundColor);
            this.p5.rect(this.position.x + 60 * idx,  this.position.y, 40, 30);
            this.p5.text(item, this.position.x + 60 * idx, this.position.y)
            this.p5.pop();
        })
    }
}

export default PickerMenuItem;