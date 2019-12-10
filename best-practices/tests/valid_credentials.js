const expect = require('chai').expect;


describe("Valid credentials", function() {

    it("should login with valid credentials", function() {
        browser.url("/");

        $("#user-name").setValue("standard_user");
        $("#password").setValue("secret_sauce");
        $(".btn_action").click();

	    expect($('#shopping_cart_container').isDisplayed()).to.be.true;
    });
});