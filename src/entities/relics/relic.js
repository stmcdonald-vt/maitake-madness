import HealthBar from "../../hud/healthBar";
import Character from "../character";
import gp5 from "../../sketch";

export default class Relic extends Character {
    /**
     * @param {p5.Vector} position 
     */
    constructor(position) {
        super();
        this.position = position;
        this.health = 100;
        this.startHealth = 100;
        this.healthBarWidth = 5;
        this.healthBarGap = 4;
        this.auraExtension = 150;
        this.auraColor = gp5.color(255, 0, 0, 30)
    }

    initialize() {
        this.healthBar = new HealthBar(this.topLeft.x, this.topLeft.y + this.image.height + this.healthBarGap, this, this.healthBarWidth, this.image.width);
    }

    showAura() {
        gp5.push();
        gp5.noStroke();
        gp5.fill(this.auraColor);
        gp5.circle(0, 0, this.image.width + this.auraExtension);
        gp5.pop();
    }

    update() {
        this.applyEffect();
    }

    draw() {
        gp5.push();
        gp5.translate(this.position.x, this.position.y);
        gp5.imageMode(gp5.CENTER);
        this.showAura();
        gp5.image(this.image, 0, 0);
        this.drawHitIndication();
        gp5.pop();
        this.healthBar.display();
    }

    display() {
        this.update();
        this.draw();
    }
}