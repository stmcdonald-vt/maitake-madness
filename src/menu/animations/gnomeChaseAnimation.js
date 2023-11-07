import GnomeActor from '../../actors/gnomeActor';
import ChanterelleActor from '../../actors/chanterelleActor';
import ButtonMushroomActor from '../../actors/buttonMushroomActor';
import MorelActor from '../../actors/morelActor';
import game from '../../game';
import gp5 from '../../sketch';

// Animation on the Options screen where the gnome is chasing the mushrooms
class GnomeChaseAnimation {
    /**
     * @param {p5.Vector} position 
     */
    constructor( position) {
        this.position = position;
        this.forward = true;
        this.button = new ButtonMushroomActor(gp5.createVector(this.position.x, this.position.y));
        this.chanterelle = new ChanterelleActor(gp5.createVector(this.position.x -50, this.position.y));
        this.morel = new MorelActor(gp5.createVector(this.position.x -100, this.position.y));
        this.gnome = new GnomeActor(gp5.createVector(this.position.x - 200, this.position.y));

        this.actors = [
            this.gnome,
            this.button,
            this.chanterelle,
            this.morel
        ]

        this.setForward();
    }

    setReverse() { // Need to rearrange the order and move them the other direction. 
        const startPoint = 450;
        const speed = gp5.random(-6, -1);
        this.button.setXPosition(startPoint);
        this.button.setXVelocity(speed);
        this.chanterelle.setXPosition(startPoint + 50);
        this.chanterelle.setXVelocity(speed);
        this.morel.setXPosition(startPoint + 100);
        this.morel.setXVelocity(speed);
        this.gnome.setXPosition(startPoint + 200);
        this.gnome.setXVelocity(speed);
        this.forward = false;
    }

    setForward() { 
        const startPoint = -50;
        const speed = gp5.random(1, 6);
        this.button.setXPosition(startPoint);
        this.button.setXVelocity(speed);
        this.chanterelle.setXPosition(startPoint - 50);
        this.chanterelle.setXVelocity(speed);
        this.morel.setXPosition(startPoint - 100);
        this.morel.setXVelocity(speed);
        this.gnome.setXPosition(startPoint - 200);
        this.gnome.setXVelocity(speed);
        this.forward = true;
    }

    display() {
        if (this.forward && this.gnome.position.x > 400) {
            this.setReverse();
        } else if (!this.forward && this.gnome.position.x < -30) {
            this.setForward();
        }
        this.actors.forEach(actor => {
            actor.jump(0.75); // In this animation, the actors are constantly hopping
            actor.display();
        });        
    }
}
export default GnomeChaseAnimation;
