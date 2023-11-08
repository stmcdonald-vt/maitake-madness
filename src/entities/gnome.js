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
        this.width = game.assets.gnome.front.width;
        this.halfWidth = this.width / 2;
        this.height = game.assets.gnome.front.height;
        this.halfHeight = this.height / 2;
        this.angle = 0;
        this.moveSpeed = 2;
    }

    get topLeftX() {
        return this.position.x - this.halfWidth;
    }

    get topLeftY() {
        return this.position.y - this.halfHeight;
    }

    moveX(direction) {
        this.position.x += this.moveSpeed * direction;
    }

    moveY(direction) {
        this.position.y += this.moveSpeed * direction;
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
            gp5.push();
            gp5.scale(-1,1); // flip horizontally
            const image = game.assets.gnome.side
            gp5.image(image, 0, 0);
            gp5.pop();
        }
    }

    draw() {
        gp5.push();
        gp5.imageMode(gp5.CENTER);
        gp5.stroke('black')
        gp5.noFill();
        gp5.rect(this.topLeftX, this.topLeftY, this.width, this.height)
        gp5.translate(this.position.x, this.position.y);
        this.drawDirectionalSprite();

        // gp5.translate(this.halfWidth, this.halfHeight);
        gp5.circle(0, 0, 5)
        gp5.rotate(this.angle);
        gp5.fill('black');
        gp5.rect(40, 0, 15, 4);
        gp5.pop();
    }

    display() {
        this.update();
        this.draw();
    }
}