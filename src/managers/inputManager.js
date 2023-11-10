import gp5 from "../sketch";
import game from "../game";
// Handles input 
const inputManager = {
    keyMap: {},
    clickFunctions: [],

    setPlayer: function (player) {
        this.player = player;
    },

    registerClickFunction: function (func) {
        // Allows any component to register functions that react to clicks
        this.clickFunctions.push(func); 
    },

    clearClickFunctions: function () {
        this.clickFunctions = [];
    },

    onClick: function () {
        this.clickFunctions.forEach(func => func());
    },

    mouseInsideBounds: function (lowX, highX, lowY, highY) {
        return gp5.mouseX > lowX
            && gp5.mouseX < highX
            && gp5.mouseY > lowY
            && gp5.mouseY < highY;
    },

    processInputs() {
        if (!gp5.keyIsPressed) {
            return;
        }

        if (this.keyMap[68]) { // D arrow moves player right
            this.player.moveX(1);
        }
        if (this.keyMap[65]) { // A moves player left
            this.player.moveX(-1);
        }
        if (this.keyMap[87]) { // W moves player left
            this.player.moveY(-1);
        }
        if (this.keyMap[83]) { // S arrow moves player down
            this.player.moveY(1);
        }
        if (this.keyMap[13] && game.isOver) { // Enter resets game
            setup(); 
        }
    }
}

export default inputManager;