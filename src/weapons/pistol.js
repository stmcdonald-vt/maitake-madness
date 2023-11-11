import game from "../game";
import Gun from "./gun";

export default class Pistol extends Gun {
    constructor() {
        const spread = 0;
        const pellets = 1;
        const spacing = 30;
        const range = 400;
        const damage = 2;
        const decay = 0.02;
        const image = game.assets.pistol;
        const cooldown = 10;
        super(spread, pellets, spacing, range, damage, decay, image, cooldown);
        this.ammo = Infinity;
        this.name = "Pistol";
    }
}