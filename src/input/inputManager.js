class InputManager {
    constructor(game) {
        this.p5 = game.p5;
        this.keyMap = {};
        this.clickFunctions = [];
    }

    registerClickFunction(func) {
        this.clickFunctions.push(func);
    }

    clearClickFunctions() {
        this.clickFunctions = [];
    }

    mouseInsideBounds(lowX, highX, lowY, highY) {
        return this.p5.mouseX > lowX
            && this.p5.mouseX < highX
            && this.p5.mouseY > lowY
            && this.p5.mouseY < highY;
    }

    onClick() {
        this.clickFunctions.forEach(func => func());
    }
}

export default InputManager;