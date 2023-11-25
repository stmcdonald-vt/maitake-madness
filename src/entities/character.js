import gp5 from "../sketch";

export default class Character {
    constructor() {
        this.hopState = 0;
        this.maxHopState = 4;
        this.hoppingUp = false;
        this.hopDelta = 1;
        this.hitTimer = 0;
        this.maxHitTimer = 20;
    }

    drawHitIndication() {
        if (this.hitTimer > 0) {
            gp5.tint(255, 0, 0, gp5.lerp(0, 255, this.hitTimer / this.maxHitTimer)); // Tint red then fade away when hit.
            gp5.image(this.image, 0, 0);
            this.hitTimer--;
        }
    }

    hit(damage) {
        this.health -= damage;
        this.hitTimer = this.maxHitTimer;
    }

    hopWalk() {
        if (this.hoppingUp) {
            if (this.hopState < this.maxHopState) {
                this.position.y -= this.hopDelta;
                this.hopState++;
            } else {
                this.hoppingUp = false;
            }
        } else {
            if (this.hopState > 0) {
                this.position.y += this.hopDelta;
                this.hopState--;
            } else {
                this.hoppingUp = true;
            }
        }
    }
}