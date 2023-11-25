import Character from "../entities/character";
import gp5 from "../sketch";
export default class HealthBar {
    /**
    * @param {p5.Vector} position
    * @param {Character} entity
    * @param {number} maxHealth
    */
    constructor(x, y, entity, width=20, length=100) {
        this.x = x;
        this.y = y;
        this.entity = entity;
        this.width = width;
        this.length = length;
    }

    display() {
        const greenLength = this.entity.health / this.entity.startHealth * this.length;
        const redLength = this.length - greenLength;
        console.log(greenLength, redLength)
        gp5.push();
        gp5.noStroke();
        gp5.rectMode(gp5.CORNER);
        gp5.translate(this.x, this.y);
        gp5.fill('green');
        gp5.rect(0, 0, greenLength, this.width);
        gp5.translate(greenLength, 0);
        gp5.fill('red');
        gp5.rect(0, 0, redLength, this.width);
        gp5.pop();
    }
}