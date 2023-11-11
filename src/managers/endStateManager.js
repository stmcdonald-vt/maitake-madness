import game from "../game";
import Button from "../menu/button";
import gp5 from "../sketch";

const endStateManager = {
    initialize: function () {
        this.homeButton = new Button(gp5.createVector(360, 425), this.goHome, undefined, undefined, 'Home');
    },
    showMessageCenter: function(message) {
        gp5.push();
        gp5.textAlign(gp5.CENTER);
        gp5.text(message, 400, 400);
        gp5.pop();
    },
    goHome: function() {
        game.resetGame();
        gp5.setup();
    },
}
export default endStateManager;