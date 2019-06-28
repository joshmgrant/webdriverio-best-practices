const expect = require('chai').expect;


describe("Login", function() {

    it("workflow", function() {
        browser.url("/")

        $("#user-name").addValue("");
        $("#password").addValue("");
        $(".btn_action").click();	

        expect($("[data-test='error']").isDisplayed());

        $("#user-name").addValue("standard_user");
        $("#password").addValue("secret_sauce");
        $(".btn_action").click();

	expect($('#header_container').isDisplayed());
    });
});