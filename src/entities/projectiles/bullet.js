import gp5 from "../../sketch";
import game from "../../game";
import Projectile from "./projectile";

export default class Bullet extends Projectile {
    constructor(x, y, heading, speed=6, distance=400, damage=3, decayPerFrame=0.01, poison=false, poisonFrames=120) {
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
        this.image = game.assets.bullet;
        this.poison = poison;
        this.poisonFrames = poisonFrames;
    }
}