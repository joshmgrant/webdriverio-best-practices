class LoginPage {

    
    open() {
       browser.url("/");
    }

    loginAs(username, password) {
        $("#user-name").setValue(username);
        $("#password").setValue(password);
        $(".btn_action").click();
    }

    isErrorVisible() {
        return $(".error-button").isDisplayed();
    }

    
};

module.exports = LoginPage;