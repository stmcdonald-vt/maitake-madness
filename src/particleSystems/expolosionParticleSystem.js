import gp5 from "../sketch";
import ParticleSystem from "./particleSystem";
import Particle from "./particle";

export default class ExplosionParticleSystem extends ParticleSystem {

    constructor(x, y, colors) {
        super(x, y);
        this.particleTtl = 60;
        this.particleSize = 5;
        this.colors = colors;
        this.populateParticles();
    }

    get particleVelocity() { // Particle velocity converted to polar for circular shape
        const cartVelocity = gp5.createVector(gp5.random(0, gp5.TWO_PI), gp5.random(-0.5, 0.5));
        return (gp5.createVector(cartVelocity.y*gp5.cos(cartVelocity.x), cartVelocity.y*gp5.sin(cartVelocity.x))).mult(2);
    }

    get particleColor() { // randomly assign red or black rgb values
        return gp5.random(this.colors);
    }

    populateParticles() { // pre-populate all particles
        for (let i = 0; i < this.targetParticleCount; i++) {
            this.particles.push(new Particle(this.position.x, this.position.y, this.particleVelocity, this.particleColor, this.particleTtl, this.particleSize))
        }
    }

    update() {
        if (this.particles.length > 0) {
            this.displayParticles(); // Explosions don't refill particles, so stop once all are dead
        }
    }
}