const expect = require('chai').expect;


describe("Login", function() {

    it("workflow", function() {
        browser.url("/")

        $("#user-name").setValue("");
        $("#password").setValue("");
        $(".btn_action").click();	

        expect($("[data-test='error']").isDisplayed()).to.be.true;

        $("#user-name").setValue("invalid");
        $("#password").setValue("invalid");
        $(".btn_action").click();	

        expect($("[data-test='error']").isDisplayed()).to.be.true;

        $("#user-name").setValue("standard_user");
        $("#password").setValue("secret_sauce");
        $(".btn_action").click();

	    expect($('#shopping_cart_container').isDisplayed()).to.be.true;
    });
});