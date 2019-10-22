const Page = require('./page');

class LoginPage extends Page {

    constructor() {
        super();
    }
    
    open() {
       super.open("login");
    }

    loginAs(username, password) {
        $("#username").setValue(username);
        $("#password").setValue(password);
        $(".radius").click();
    }

    isErrorVisible() {
        return $(".error").isDisplayed();
    }

    
};

module.exports = LoginPage;