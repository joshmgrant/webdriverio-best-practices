const expect = require('chai').expect;


describe("Invalid credentials", function() {

    it("should not login with invalid credentials", function() {
        browser.url("/");

        $("#user-name").setValue("invalid");
        $("#password").setValue("invalid");
        $(".btn_action").click();	

        expect($("[data-test='error']").isDisplayed()).to.be.true;
    });
});