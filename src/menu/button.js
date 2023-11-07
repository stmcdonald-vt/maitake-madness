import game from "../game";

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
    constructor(position, actionFunction, height, width, text=undefined, renderFunction=undefined) {
        this.position = position;
        this.actionFunction = actionFunction;
        this.height = height;
        this.width = width;
        this.text = text; // Planned to be used in the defaultDisplay. Menu Items may use this component later.
        this.display = renderFunction || this.defaultDisplay;
        this.registerClickListeners();
    }

    registerClickListeners() {
        game.inputManager.registerClickFunction(() => {
            if (game.inputManager.mouseInsideBounds(
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
        // Currently not implemented as it is only being used with a provided renderFunction
    }
}
export default Button;