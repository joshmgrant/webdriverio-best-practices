const expect = require('chai').expect;
const LoginPage = require('../pages/login.page');
const loginPage = new LoginPage();

describe('Valid Login', function() {

    it("login successfully", function() {
        loginPage.open();
        loginPage.loginAs("standard_user", "secret_sauce");
        expect($('.shopping-cart-badge').isDisplayed());
    });
});