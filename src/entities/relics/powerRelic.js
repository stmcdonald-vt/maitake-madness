import game from "../../game";
import entityManager from "../../managers/entityManager";
import Relic from "./relic"
import gp5 from "../../sketch";

export default class PowerRelic extends Relic {
    constructor(position) {
        super(position);
        this.image = game.assets.relics.vase;
        this.auraColor = gp5.color(255, 0, 0, 30)
        this.initialize();
    }

    applyEffect() {
        if (entityManager.distanceToPlayer(this) < this.auraExtension) {
            entityManager.gnome.gun.damageMultiplier = 2;
        } else {
            entityManager.gnome.gun.damageMultiplier = 1;
        }
    }
}