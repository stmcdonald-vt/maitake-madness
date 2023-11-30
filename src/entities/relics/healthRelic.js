import game from "../../game";
import entityManager from "../../managers/entityManager";
import Relic from "./relic"
import gp5 from "../../sketch";

export default class HealthRelic extends Relic {
    constructor(position) {
        super(position);
        this.image = game.assets.relics.statue;
        this.auraColor = gp5.color(255, 255, 0, 30)
        this.initialize();
    }

    applyEffect() {
        if (entityManager.distanceToPlayer(this) < this.auraExtension) {
            entityManager.gnome.regenRate = 0.02;
        } else {
            entityManager.gnome.regenRate = 0;
        }
    }
}