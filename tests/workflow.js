const expect = require('chai').expect;


describe("Login Tests", function() {

    it("should not login with blank credentials", function() {
        browser.url("/")

        $("#user-name").setValue("");
        $("#password").setValue("");
        $(".btn_action").click();	

        expect($(".error-button").isDisplayed()).to.be.true;
    });

    it("should not login with invalid credentials", function() {
        browser.url("/")

        $("#user-name").setValue("invalid");
        $("#password").setValue("invalid");
        $(".btn_action").click();	

        expect($(".error-button").isDisplayed()).to.be.true;
    });

    it("should login with valid credentials", function() {
        browser.url("/");

        $("#user-name").setValue("standard_user");
        $("#password").setValue("secret_sauce");
        $(".btn_action").click();

	    expect($('.shopping-cart').isDisplayed()).to.be.false;
    });
});