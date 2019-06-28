const expect = require('chai').expect;


describe("Login with Valid Username", function() {

    it("with standard user", function() {
        browser.url("/")

        $("#user-name").addValue("standard_user");
        $("#password").addValue("secret_sauce");
        $(".btn_action").click();

	expect($('#header_container').isDisplayed());
    });
});