const expect = require('chai').expect;
const loginPage = new (require('../pages/login.page'));

describe("Login with Blank Username", function() {

    it("with blank username", function() {
        loginPage.open();

        loginPage.loginAs("", "");

        expect(loginPage.isErrorVisible()).to.be.true;
    });
});