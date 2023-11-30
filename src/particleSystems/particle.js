import gp5 from "../sketch";

export default class Particle {
    constructor(x, y, velocity, color=gp5.color('gray'), ttl=240, size=2) {
        this.position = gp5.createVector(x, y);
        this.velocity = velocity;
        this.initialTtl = ttl;
        this.ttl = ttl;
        this.size = size;
        this.color = color;
    }

    get opacity() {
        // Fading effect is based on the ratio of current ttl to initial ttl
        return this.ttl/this.initialTtl * 255;
    }

    display(){
        this.color.setAlpha(this.opacity);
        gp5.push();
        gp5.noStroke();
        gp5.fill(this.color);
        gp5.circle(this.position.x, this.position.y, this.size);
        gp5.pop();
        this.ttl--;
        this.position.add(this.velocity);
    }
}