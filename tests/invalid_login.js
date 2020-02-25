const expect = require('chai').expect;
const LoginPage = require('../pages/login.page');
const loginPage = new LoginPage();

describe('Invalid Login', function() {

    it("login with incorrect credentials", function() {
        loginPage.open();
        loginPage.loginAs("invalid", "invalid");
        expect(loginPage.isErrorVisible()).to.be.true;
    });

    it("login with blank credentials", function() {
        loginPage.open();
        loginPage.loginAs("", "");
        expect(loginPage.isErrorVisible()).to.be.true;
    });
});