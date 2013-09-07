function hasLocalStorage() {
    if (localStorage) {
        console.log("Has localStorage");
        return true;
    }
    else {
        console.log("Doesn't have localStorage");
        return false;
    }
}

function loginSuccess(user) {
    if (hasLocalStorage()) {
        localStorage.COLORSUserName = user.name;
        localStorage.COLORSUserID = user.id;

        window.location = "colors.html";
        // Make this fancier, eventually.
    }
}

function logout() {
    FB.logout(function(response) {
        localStorage.removeItem("COLORSUserName");
        localStorage.removeItem("COLORSUserID");
    });
}