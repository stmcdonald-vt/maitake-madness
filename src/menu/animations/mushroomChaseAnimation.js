import GnomeActor from '../../actors/gnomeActor';
import ChanterelleActor from '../../actors/chanterelleActor';
import ButtonMushroomActor from '../../actors/buttonMushroomActor';
import MorelActor from '../../actors/morelActor';
import gp5 from '../../sketch';
import p5 from 'p5';

class MushroomChaseAnimation {
    /**
     * 
     * @param {p5.Vector} position 
     */
    constructor(position) {
        this.position = position;
        this.forward = true;
        this.gnome = new GnomeActor(gp5.createVector(this.position.x, this.position.y));
        this.button = new ButtonMushroomActor(gp5.createVector(this.position.x - 100, this.position.y));
        this.chanterelle = new ChanterelleActor(gp5.createVector(this.position.x - 150, this.position.y));
        this.morel = new MorelActor(gp5.createVector(this.position.x - 200, this.position.y));

        this.actors = [
            this.gnome,
            this.button,
            this.chanterelle,
            this.morel
        ]

        this.setForward();
    }

    setReverse() { // Need to rearrange the order and move them the other direction. 
        const startPoint = gp5.width + 50;
        const speed = gp5.random(-6, -1);
        this.gnome.setXPosition(startPoint);
        this.gnome.setXVelocity(speed);
        this.button.setXPosition(startPoint + 100);
        this.button.setXVelocity(speed);
        this.chanterelle.setXPosition(startPoint + 150);
        this.chanterelle.setXVelocity(speed);
        this.morel.setXPosition(startPoint + 200);
        this.morel.setXVelocity(speed);
        this.forward = false;
    }

    setForward() {
        const startPoint = -50;
        const speed = gp5.random(1, 6);
        this.gnome.setXPosition(startPoint);
        this.gnome.setXVelocity(speed);
        this.button.setXPosition(startPoint - 100);
        this.button.setXVelocity(speed);
        this.chanterelle.setXPosition(startPoint - 150);
        this.chanterelle.setXVelocity(speed);
        this.morel.setXPosition(startPoint - 200);
        this.morel.setXVelocity(speed);
        this.forward = true;
    }

    display() {
        if (this.forward && this.morel.position.x > gp5.width) {
            this.setReverse();
        } else if (!this.forward && this.morel.position.x < -30) {
            this.setForward();
        }
        this.actors.forEach(actor => {
            actor.jump(0.75); // In this animation, the actors are constantly hopping
            actor.display();
        });
    }
}
export default MushroomChaseAnimation;
