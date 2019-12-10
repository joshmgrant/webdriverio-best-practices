const expect = require('chai').expect;
const loginPage = new (require('../pages/login.page'));


describe("Blank credentials", function() {

    it("should not login with blank credentials", function() {
        loginPage.open();

        loginPage.loginAs("", "");

        expect(loginPage.isErrorVisible()).to.be.true;
    });
});