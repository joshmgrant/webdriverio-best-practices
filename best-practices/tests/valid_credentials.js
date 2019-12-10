const expect = require('chai').expect;
const loginPage = new (require('../pages/login.page'));


describe("Valid credentials", function() {

    it("should login with valid credentials", function() {
        loginPage.open();

        loginPage.loginAs("standard_user", "secret_sauce");

	    expect($('#shopping_cart_container').isDisplayed()).to.be.true;
    });
});