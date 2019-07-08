const Page = require('./page');

class InventoryPage extends Page {

    constructor() {
        super();
    }
    
    open() {
       super.open("/inventory.html");
    }

    header() {
        return $('#header_container');
    }

};

module.exports = InventoryPage;