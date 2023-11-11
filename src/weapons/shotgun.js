import game from "../game";
import gp5 from "../sketch";
import Gun from "./gun";

export default class Shotgun extends Gun {
    constructor() {
        const spread = gp5.QUARTER_PI;
        const pellets = 5;
        const spacing = 60;
        const range = 100;
        const damage = 4;
        const decay = 0.1;
        const image = game.assets.shotgun;
        const cooldown = 45;
        super(spread, pellets, spacing, range, damage, decay, image, cooldown);
        this.ammo = 10;
        this.name = "Shotgun";
    }
}