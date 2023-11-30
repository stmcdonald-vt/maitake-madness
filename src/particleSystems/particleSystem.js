import entityManager from "../managers/entityManager";
import gp5 from "../sketch";
import Particle from "./particle";

export default class ParticleSystem {
    constructor(x, y) {
        this.position = gp5.createVector(x, y);
        this.particles = [];
        this.targetParticleCount = 50;
        this.particlesPerFrame = 3;
        this.velocity = gp5.createVector(0, 2);
        this.spreadMin = -15;
        this.spreadMax = 15;
    }

    // helper function for spreading out the positions
    spread(value) {
        return value + gp5.random(this.spreadMin, this.spreadMax);
    }

    emitParticles() {
        for (let i = 0; i < this.particlesPerFrame; i++) {
            this.particles.push(new Particle(this.spread(this.position.x), this.spread(this.position.y), this.particleVelocity));
        }
    }

    displayParticles() {
        // Iterate over the particle array backward. Splicing out elements can lead to index mismatch
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            if (particle.ttl > 0) {
                particle.display();
            } else {
                this.particles.splice(i, 1); // particle is dead, remove
            }
        }
    }

    update() {
        if (entityManager.isInbounds(this)) { // stop emitting when leaving the play area
            this.emitParticles();
        }
        this.displayParticles();
        this.position.add(this.velocity);
    }
}