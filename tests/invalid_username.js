const expect = require('chai').expect;


describe("Loginw with Invalid Username", function() {

    it("with invalid username", function() {
        browser.url("/")

        $("#user-name").addValue("invalid");
        $("#password").addValue("invalid");
        $(".btn_action").click();	

        expect($("[data-test='error']").isDisplayed());
    });
});