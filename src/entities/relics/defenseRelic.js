import game from "../../game";
import entityManager from "../../managers/entityManager";
import Relic from "./relic"
import gp5 from "../../sketch";

export default class DefenseRelic extends Relic {
    constructor(position) {
        super(position);
        this.image = game.assets.gnome.side;
        this.auraColor = gp5.color(255, 255, 0, 30)
        this.initialize();
    }

    applyEffect() {
        if (entityManager.distanceToPlayer(this) < this.auraExtension) {
            entityManager.gnome.damageTakenMultiplier = 0.5;
        } else {
            entityManager.gnome.damageTakenMultiplier = 1;
        }
    }
}