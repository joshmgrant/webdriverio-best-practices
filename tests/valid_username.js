const expect = require('chai').expect;
const loginPage = new (require('../pages/login.page'));


describe("Login with Valid Username", function() {

    it("with standard user", function() {
        loginPage.open();

        loginPage.loginAs("standard_user", "secret_sauce");

	     expect($('#header_container').isDisplayed()).to.be.true;
    });
});