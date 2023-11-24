import p5 from 'p5';
import gp5 from '../sketch';
import { constants } from '../sketch';
import game from '../game';
import inputManager from '../managers/inputManager';
import Pistol from '../weapons/pistol';
import Shotgun from '../weapons/shotgun';

export default class Gnome {
    #moveX = 0;
    #moveY = 0;

    /**
     * 
     * @param {p5.Vector} position 
     */
    constructor(position) {
        this.position = position;
        this.angle = 0;
        this.moveSpeed = 3;
        this.image = game.assets.gnome.front;
        this.startHealth = 20;
        this.health = 20;
        this._topLeftVector = gp5.createVector(0, 0);
        this.weapons = [new Pistol(), new Shotgun()];
        this.currentWeapon = 1;
    }

    registerClickListeners() {
        inputManager.registerClickHoldFunction(() => {
            this.shoot();
        })
    }

    get topLeft() {
        this._topLeftVector.set(this.position.x - this.image.width / 2, this.position.y - this.image.height / 2);
        return this._topLeftVector;
    }

    get gun() {
        return this.weapons[this.currentWeapon];
    }

    moveX(direction) {
        const value = this.moveSpeed * direction;
        if (this.position.x + value < gp5.width && this.position.x + value > 0) { // check bounds before moving
            this.#moveX = direction;
        }
    }

    moveY(direction) {
        const value = this.moveSpeed * direction;
        if (this.position.y + value < gp5.height && this.position.y + value > 0) { // check bounds before moving
            this.#moveY = direction;
        }
    }

    nextWeapon() {
        this.currentWeapon = (this.currentWeapon + 1) % this.weapons.length;
    }

    shoot() {
        this.weapons[this.currentWeapon].shoot(this.position, this.angle);
    }

    #update() {
        const mouseVector = gp5.createVector(gp5.mouseX, gp5.mouseY);
        mouseVector.sub(this.position);
        this.angle = mouseVector.heading();

        // Move based on controls. We need to normalize here to ensure diagonal movement is the same speed.
        const moveVector = gp5.createVector(this.#moveX, this.#moveY).normalize().mult(this.moveSpeed);
        this.position.add(moveVector);
        this.#moveX = 0;
        this.#moveY = 0;
    }

    #angleBetween(a, b) {
        return this.angle >= a && this.angle < b;
    }

    #drawDirectionalGnome() {
        if (this.#angleBetween(-constants.FOURTH_PI,constants.FOURTH_PI)) {
            this.image = game.assets.gnome.right;
        } else if (this.#angleBetween(constants.FOURTH_PI, constants.THREE_FOURTHS_PI)){
            this.image = game.assets.gnome.front;
        } else if(this.#angleBetween(-constants.THREE_FOURTHS_PI, -constants.FOURTH_PI)) {
            this.image = game.assets.gnome.back;
        } else {
            this.image = game.assets.gnome.left
        }

        gp5.image(this.image, 0, 0);
    }

    #drawDirectionalWeapon() {
        gp5.push();
        if (this.#angleBetween(-gp5.PI, -gp5.HALF_PI) || this.#angleBetween(gp5.HALF_PI, gp5.PI)) {
            gp5.scale(1,-1); // flip horizontally
        }
        gp5.image(this.gun.image, this.gun.spacing, 0);
        gp5.pop();
    }



    #draw() {
        gp5.push();
        gp5.imageMode(gp5.CENTER);
        gp5.stroke('black')
        gp5.noFill();
        // gp5.rect(this.topLeft.x, this.topLeft.y, this.image.width, this.image.height)
        gp5.translate(this.position.x, this.position.y);
        this.#drawDirectionalGnome();

        // gp5.translate(this.halfWidth, this.halfHeight);
        // gp5.circle(0, 0, 5)
        gp5.rotate(this.angle);
        gp5.fill('black');
        // gp5.rect(this.gunSpacing, 0, 15, 4);
        // gp5.image(game.assets.pistol, this.gunSpacing, 0);
        this.#drawDirectionalWeapon();
        gp5.pop();
    }

    display() {
        this.#update();
        this.#draw();
    }
}