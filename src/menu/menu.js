/**
 * Generic menu class to hold and format menuItems. Currently only displays, but is extensible.
 */
class Menu {
    constructor() {
        
    }

    display() {
        this.items.forEach(item => item.display());
    }
}
export default Menu