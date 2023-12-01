import game from "../game";
import Gun from "./gun";

export default class Sniper extends Gun {
    constructor() {
        const spread = 0;
        const pellets = 1;
        const spacing = 60;
        const range = 700;
        const damage = 12;
        const decay = 0.005;
        const image = game.assets.sniper;
        const cooldown = 50;
        const speed = 10;
        super(spread, pellets, spacing, range, damage, decay, image, cooldown, speed);
        this.ammo = 10;
        this.name = "Sniper";
    }
}