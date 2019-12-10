const expect = require('chai').expect;


describe("Blank credentials", function() {

    it("should not login with blank credentials", function() {
        browser.url("/");

        $("#user-name").setValue("");
        $("#password").setValue("");
        $(".btn_action").click();	

        expect($("[data-test='error']").isDisplayed()).to.be.true;
    });
});