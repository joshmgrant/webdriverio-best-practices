const expect = require('chai').expect;
const LoginPage = require('../pages/login.page');
const loginPage = new LoginPage();

describe('Using Sauce Connect', function() {

    it("login successfully", function() {
        loginPage.open();
        loginPage.loginAs("tomsith", "SuperSecretPassword!");
        expect($('.success').isDisplayed());
    });
});