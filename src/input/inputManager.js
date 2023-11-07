import gp5 from "../sketch";
// Handles input 
class InputManager {
    constructor() {
        this.keyMap = {};
        this.clickFunctions = [];
    }

    // Allows any component to register functions that react to clicks
    registerClickFunction(func) {
        this.clickFunctions.push(func); 
    }

    clearClickFunctions() {
        this.clickFunctions = [];
    }

    // Used in the functions that are registered
    mouseInsideBounds(lowX, highX, lowY, highY) {
        return gp5.mouseX > lowX
            && gp5.mouseX < highX
            && gp5.mouseY > lowY
            && gp5.mouseY < highY;
    }

    onClick() {
        this.clickFunctions.forEach(func => func());
    }
}

export default InputManager;