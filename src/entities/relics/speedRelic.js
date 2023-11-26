import game from "../../game";
import entityManager from "../../managers/entityManager";
import Relic from "./relic"
import gp5 from "../../sketch";

export default class SpeedRelic extends Relic {
    constructor(position) {
        super(position);
        this.image = game.assets.chanterelle;
        this.auraColor = gp5.color(0, 0, 255, 30)
        this.initialize();
    }

    applyEffect() {
        if (entityManager.distanceToPlayer(this) < this.auraExtension) {
            entityManager.gnome.speedMultiplier = 1.5;
        } else {
            entityManager.gnome.speedMultiplier = 1;
        }
    }
}