import gp5 from "../sketch";

export default class LevelPreview {
    constructor(position, image, width=undefined, height=undefined) {
        this.position = position;
        this.image = image;
        this.width = width;
        this.height = height;
    }

    display() {
        gp5.push();
        gp5.image(this.image, this.position.x, this.position.y, this.width, this.height);
        gp5.pop(); 
    }
}