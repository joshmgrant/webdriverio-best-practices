const expect = require('chai').expect;

describe('Valid Login', function() {

    it("should login with valid credentials", function() {
        browser.url("/");

        $("#user-name").setValue("standard_user");
        $("#password").setValue("secret_sauce");
        $(".btn_action").click();

	    expect($('.shopping-cart').isDisplayed()).to.be.false;
    });
});