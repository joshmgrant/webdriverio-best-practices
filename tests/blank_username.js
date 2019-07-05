const expect = require('chai').expect;


describe("Login with Blank Username", function() {

    it("with blank username", function() {
        browser.url("/")

        $("#user-name").addValue("");
        $("#password").addValue("");
        $(".btn_action").click();	

        expect($("[data-test='error']").isDisplayed()).to.be.true;
    });
});