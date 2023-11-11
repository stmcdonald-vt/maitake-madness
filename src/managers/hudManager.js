import HealthHud from "../hud/healthHud.js";
import WeaponHud from "../hud/weaponHud.js";


const hudManager = {
    initialize: function() {
        this.components = [
            new HealthHud(0, 760),
            new WeaponHud(0, 790),
        ]
    },

    display: function() {
        this.components.forEach(comp => comp.display());
    }
}

export default hudManager;