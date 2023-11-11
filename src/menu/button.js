import game from "../game";
import inputManager from "../managers/inputManager";
import gp5 from "../sketch";
// Generic button that can be used by any component to render a button and register a click function.
// Currently only supports rectangular shaped hitboxes
class Button {
    /**
     * 
     * @param {p5.Vector} position 
     * @param {function} actionFunction 
     * @param {number} height 
     * @param {number} width 
     * @param {string} text 
     * @param {*} renderFunction 
     */
    constructor(position, actionFunction, height=50, width=undefined, text=undefined, renderFunction=undefined, backgroundColor=undefined) {
        this.position = position;
        this.actionFunction = actionFunction;
        this.height = height;
        this.width = width || gp5.textWidth(text || "") + 10;
        this.text = text; // Planned to be used in the defaultDisplay. Menu Items may use this component later.
        this.display = renderFunction || this.defaultDisplay;
        this.backgroundColor = backgroundColor || gp5.color('green');
        this.registerClickListeners();
    }

    registerClickListeners() {
        inputManager.registerClickFunction(() => {
            if (inputManager.mouseInsideBounds(
                this.position.x,
                this.position.x + this.width,
                this.position.y,
                this.position.y + this.height)
                ){
                    this.actionFunction();
                }
        })
    }

    defaultDisplay() {
        gp5.push();
        gp5.fill(this.backgroundColor);
        // gp5.rectMode(gp5.CENTER);
        gp5.rect(this.position.x,  this.position.y , this.width, this.height);
        gp5.fill('white');
        gp5.textAlign(gp5.CENTER);
        gp5.text(this.text, this.position.x + this.width / 2, this.position.y + this.height / 2);
        gp5.pop();
    }
}
export default Button;