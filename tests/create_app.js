const expect = require("chai").expect;

describe("Creating an App", () => {
    
   
    it("can be created from scratch", () => {
        browser.url("/");
        $("input[name='loginid']").addValue("josh.grant@saucelabs.com");
        $("input[name='password']").addValue("secret password");
        $('#signin').click();

        expect($('a[data-original-title="My Apps"]').isDisplayed()).to.be.true;
    });

    it("can be imported", () => {

    });

    it("can be created from template", () => {

    });
});