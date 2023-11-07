import p5 from 'p5';
import gp5 from '../sketch';
import { constants } from '../sketch';
import game from '../game';

export default class Gnome {
    /**
     * 
     * @param {p5.Vector} position 
     */
    constructor(position) {
        this.position = position;
        this.angle = 0;
    }

    update() {
        const mouseVector = gp5.createVector(gp5.mouseX, gp5.mouseY);
        mouseVector.sub(this.position);
        this.angle = mouseVector.heading();
    }

    angleBetween(a, b) {
        return this.angle >= a && this.angle < b;
    }

    drawDirectionalSprite() {
        if (this.angleBetween(-constants.FOURTH_PI,constants.FOURTH_PI)) {
            gp5.image(game.assets.gnome.side, 0, 0);
        } else if (this.angleBetween(constants.FOURTH_PI, constants.THREE_FOURTHS_PI)){
            gp5.image(game.assets.gnome.front, 0, 0);
        } else if(this.angleBetween(-constants.THREE_FOURTHS_PI, -constants.FOURTH_PI)) {
            gp5.image(game.assets.gnome.back, 0, 0);
        } else {
            gp5.scale(-1,1); // flip horizontally
            const image = game.assets.gnome.side
            gp5.image(image, -image.width, 0);
        }
    }

    draw() {
        gp5.push();
        gp5.translate(this.position.x, this.position.y);
        this.drawDirectionalSprite();
        gp5.pop();
    }

    display() {
        this.update();
        this.draw();
        console.log(this.angle)
    }
}