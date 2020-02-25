const expect = require('chai').expect;

describe('Invalid Login', function() {

    it("should not login with incorrect credentials", function() {
        browser.url("/")

        $("#user-name").setValue("");
        $("#password").setValue("");
        $(".btn_action").click();	

        expect($(".error-button").isDisplayed()).to.be.true;
    });

    it("should not login with blank credentials", function() {
        browser.url("/")

        $("#user-name").setValue("invalid");
        $("#password").setValue("invalid");
        $(".btn_action").click();	

        expect($(".error-button").isDisplayed()).to.be.true;
    });
});