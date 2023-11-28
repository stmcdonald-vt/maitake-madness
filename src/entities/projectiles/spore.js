import Projectile from "./projectile";
import gp5 from "../../sketch";
import game from "../../game";
export default class Spore extends Projectile {
    constructor(x, y, heading, speed=3, distance=100, damage=3, decayPerFrame=0.01, poison=true, poisonFrames=120) {
        super();
        this.position = gp5.createVector(x, y);
        this.speed = speed;
        this.velocity = gp5.createVector(speed, 0);
        this.velocity.setHeading(heading);
        this.heading = heading;
        this.distance = distance;
        this.damage = damage;
        this.decayPerFrame = decayPerFrame;
        this.disabled = false;
        this.image = game.assets.spore;
        this.poison = poison;
        this.poisonFrames = poisonFrames;
    }
}