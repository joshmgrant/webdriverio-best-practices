const expect = require('chai').expect;
const loginPage = new (require('../pages/login.page'));
const inventoryPage = new (require("../pages/inventory.page"));


describe("Login with Valid Username", function() {

    it("with standard user", function() {
        loginPage.open();

        loginPage.loginAs("standard_user", "secret_sauce");

	     expect(inventoryPage.header().isDisplayed()).to.be.true;
    });
});