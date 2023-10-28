import Game from "../game";

// Generic character class. Handles shared physics. Currently WIP, will be improved in actual game.
// Need to extend for top down or have different one for animation side views.
class Character {
    /**
     * @param {Game} game 
     * @param {p5.Vector} position 
     * @param {p5.Image} image 
     */
    constructor(game, position, image) {
        this.p5 = game.p5;
        this.game = game;
        this.image = image || undefined;
        this.initialPosition = this.p5.createVector(position.x, position.y); // serves as the "ground"
        this.position = position;
        this.velocity = this.p5.createVector(0, 0);
        this.gravity = this.p5.createVector(0, .3);
        this.acceleration = this.p5.createVector(0, 0);
        this.isJumping = false;
    }

    applyForce(forceVector) {
        this.acceleration.add(forceVector);
    }

    jump(amount) {
        if (!this.isJumping) {
            this.applyForce(this.p5.createVector(0, -amount));
            this.isJumping = true;
        }
    }

    setXPosition(number) {
        this.position.set(number, this.position.y);
    }

    setXVelocity(amount) {
        this.velocity.set(amount, this.velocity.y);
    }
    
    update() {
        if (this.isJumping && this.position.y >= this.initialPosition.y) {
            // character has hit the ground
            this.velocity.set(this.velocity.x, 0);
            this.position.set(this.position.x, this.initialPosition.y);
            this.isJumping = false;
        }

        if (this.position.y < this.initialPosition.y) { // apply gravity while in air
            this.applyForce(this.gravity);
        }
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.set(0, 0); // Avoid compound acceleration
    }

    display() {
        this.update();
        this.draw();
    }
}
export default Character;