const expect = require('chai').expect;


describe("Login", function() {

    it("with blank username", function() {
        browser.url("/")

        $("#user-name").setValue("");
        $("#password").setValue("");
        $(".btn_action").click();	

        expect($("[data-test='error']").isDisplayed()).to.be.true;
    });

    it("with an invalid username", function() {
        $("#user-name").setValue("invalid");
        $("#password").setValue("invalid");
        $(".btn_action").click();	

        expect($("[data-test='error']").isDisplayed()).to.be.true;
    });

    it('with a valid username', function() {
        $("#user-name").setValue("standard_user");
        $("#password").setValue("secret_sauce");
        $(".btn_action").click();

    	expect($('#header_container').isDisplayed()).to.be.true;
    });
});