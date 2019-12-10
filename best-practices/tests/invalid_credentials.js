const expect = require('chai').expect;
const loginPage = new (require('../pages/login.page'));


describe("Invalid credentials", function() {

    it("should not login with invalid credentials", function() {
        loginPage.open();

        loginPage.loginAs("invalid", "invalid");

        expect(loginPage.isErrorVisible()).to.be.true;
    });
});