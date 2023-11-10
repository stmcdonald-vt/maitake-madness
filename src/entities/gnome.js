import p5 from 'p5';
import gp5 from '../sketch';
import { constants } from '../sketch';
import game from '../game';
import entityManager from '../managers/entityManager';
import Bullet from './bullet';
import inputManager from '../input/inputManager';

export default class Gnome {
    /**
     * 
     * @param {p5.Vector} position 
     */
    constructor(position) {
        this.position = position;
        this.angle = 0;
        this.moveSpeed = 3;
        this.image = game.assets.gnome.front;
        this.gunSpacing = 40;
        this.health = 20;
        this._topLeftVector = gp5.createVector(0, 0);
    }

    registerClickListeners() {
        inputManager.registerClickFunction(() => {
            this.shoot();
        })
    }

    get topLeft() {
        this._topLeftVector.set(this.position.x - this.image.width / 2, this.position.y - this.image.height / 2);
        return this._topLeftVector;
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
            this.image = game.assets.gnome.side
            gp5.image(this.image, 0, 0);
        } else if (this.angleBetween(constants.FOURTH_PI, constants.THREE_FOURTHS_PI)){
            this.image = game.assets.gnome.front;
            gp5.image(this.image, 0, 0);
        } else if(this.angleBetween(-constants.THREE_FOURTHS_PI, -constants.FOURTH_PI)) {
            this.image = game.assets.gnome.back;
            gp5.image(this.image, 0, 0);
        } else {
            gp5.push();
            gp5.scale(-1,1); // flip horizontally
            const image = game.assets.gnome.side
            gp5.image(image, 0, 0);
            gp5.pop();
        }
    }

    shoot() {
        entityManager.addGnomeProjectile(new Bullet(this.position.x + (this.gunSpacing * gp5.cos(this.angle)), this.position.y + (this.gunSpacing * gp5.sin(this.angle)), this.angle));
    }

    draw() {
        gp5.push();
        gp5.imageMode(gp5.CENTER);
        gp5.stroke('black')
        gp5.noFill();
        // gp5.rect(this.topLeft.x, this.topLeft.y, this.image.width, this.image.height)
        gp5.translate(this.position.x, this.position.y);
        this.drawDirectionalSprite();

        // gp5.translate(this.halfWidth, this.halfHeight);
        gp5.circle(0, 0, 5)
        gp5.rotate(this.angle);
        gp5.fill('black');
        gp5.rect(this.gunSpacing, 0, 15, 4);
        gp5.pop();
    }

    display() {
        this.update();
        this.draw();
    }
}