const expect = require('chai').expect;
const LoginPage = require('../pages/login.page');
const loginPage = new LoginPage();

describe('Invalid Login', function() {

    it("should not login with incorrect credentials", function() {
        loginPage.open();
        loginPage.loginAs("invalid", "invalid");
        expect(loginPage.isErrorVisible()).to.be.true;
    });

    it("should not login with blank credentials", function() {
        loginPage.open();
        loginPage.loginAs("", "");
        expect(loginPage.isErrorVisible()).to.be.true;
    });
});