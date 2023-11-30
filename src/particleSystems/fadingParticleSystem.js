import ParticleSystem from "./particleSystem";
import gp5 from "../sketch";
export default class FadingParticleSystem extends ParticleSystem {
    constructor(x, y) {
        super(x, y);
    }
    
    get particleVelocity() {
        return gp5.createVector(gp5.random(-.1, .1), .3)
    }
}
