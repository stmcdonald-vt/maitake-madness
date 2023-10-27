/**
 * Generic menu class to hold and format menuItems.
 */
class Menu {
    constructor() {
        
    }

    display() {
        this.items.forEach(item => item.display());
    }
}
export default Menu