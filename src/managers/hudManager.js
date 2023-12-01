import BuffHud from "../hud/buffHud.js";
import EnemyCountHud from "../hud/enemyCountHud.js";
import HealthHud from "../hud/healthHud.js";
import WaveHud from "../hud/waveHud.js";
import WeaponHud from "../hud/weaponHud.js";

const hudManager = {
    initialize: function() {
        this.components = [
            new WaveHud(790, 25),
            new EnemyCountHud(790, 55),
            new BuffHud(10, 730),
            new HealthHud(10, 760),
            new WeaponHud(10, 790),
        ]
    },
    display: function() {
        this.components.forEach(comp => comp.display());
    }
}
export default hudManager;