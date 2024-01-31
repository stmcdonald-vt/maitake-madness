import gp5 from "../sketch";
import game from "../game";
// Handles input 
const inputManager = {
    keyMap: {},
    clickFunctions: [],
    clickHoldFunctions: [],

    setPlayer: function (player) {
        this.player = player;
    },

    registerClickFunction: function (func) {
        // Allows any component to register functions that react to clicks
        this.clickFunctions.push(func); 
    },

    registerClickHoldFunction: function (func) {
        // Allows any component to register functions that react to clicks
        this.clickHoldFunctions.push(func); 
    },

    clearClickFunctions: function () {
        this.clickFunctions = [];
        this.clickHoldFunctions = [];
    },

    onClick: function () {
        this.clickFunctions.forEach(func => func());
    },

    onScroll: function(e) {
        if (e.deltaY > 0) {
            this.player.nextWeapon();
        } else {
            this.player.prevWeapon();
        }
        return false;
    },

    mouseInsideBounds: function (lowX, highX, lowY, highY) {
        return gp5.mouseX > lowX
            && gp5.mouseX < highX
            && gp5.mouseY > lowY
            && gp5.mouseY < highY;
    },

    processInputs() {
        if (!gp5.keyIsPressed && !gp5.mouseIsPressed) {
            return;
        }
        if (game.state.MOVEMENT_SCHEME === 0 ? this.keyMap[68]?.pressed : this.keyMap[39]?.pressed) { // D or arrow moves player right
            this.player.moveX(1);
        }
        if (game.state.MOVEMENT_SCHEME === 0 ? this.keyMap[65]?.pressed : this.keyMap[37]?.pressed) { // A or arrow moves player left
            this.player.moveX(-1);
        }
        if (game.state.MOVEMENT_SCHEME === 0 ? this.keyMap[87]?.pressed : this.keyMap[38]?.pressed) { // W or arrow moves player up
            this.player.moveY(-1);
        }
        if (game.state.MOVEMENT_SCHEME === 0 ? this.keyMap[83]?.pressed : this.keyMap[40]?.pressed) { // S or arrow moves player down
            this.player.moveY(1);
        }

        // Controls that should only activate once on press
        if (this.keyMap[81]?.pressed && !this.keyMap[81]?.triggered) { // Q to cycle weapons
            this.player.nextWeapon();
            this.keyMap[81].triggered = true;
        }
        if (this.keyMap[27]?.pressed && !this.keyMap[27]?.triggered) {
            if (game.state.GAME_STATE === 1) {
                game.pause();
            } else if (game.state.GAME_STATE === 4) {
                game.unpause();
            }
            this.keyMap[27].triggered = true;
        }

        // Allow 
        if (this.keyMap['click']?.pressed) {
            this.clickHoldFunctions.forEach(func => func());
        }
    }
}

export default inputManager;