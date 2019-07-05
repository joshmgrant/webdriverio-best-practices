const expect = require('chai').expect;
const loginPage = new (require('../pages/login.page'));


describe("Login with Invalid Username", function() {

    it("with invalid username", function() {
        loginPage.open();

        loginPage.loginAs("invalid", "invalid");

        expect(loginPage.isErrorVisible()).to.be.true;
    });
});