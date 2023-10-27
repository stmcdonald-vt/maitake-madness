import Game from "../game";

class Button {
    /**
     * 
     * @param {Game} game 
     * @param {*} position 
     * @param {*} actionFunction 
     * @param {*} height 
     * @param {*} width 
     * @param {*} text 
     * @param {*} renderFunction 
     */
    constructor(game, position, actionFunction, height, width, text=undefined, renderFunction=undefined) {
        this.game = game;
        this.p5 = game.p5;
        this.position = position;
        this.actionFunction = actionFunction;
        this.height = height;
        this.width = width;
        this.text = text;
        this.display = renderFunction || this.defaultDisplay;
        this.registerClickListener();
    }

    registerClickListener() {
        this.game.inputManager.registerClickFunction(() => {
            if (this.game.inputManager.mouseInsideBounds(
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
        // Render a rectangle with a button
    }
}
export default Button;