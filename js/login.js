function User() {
    this.name;
    this.id;
    this.profPic;
}

function loginSuccess(user) {
    colorsUser = new User();
    colorsUser.name = user.name;
    colorsUser.id = user.id;
    colorsUser.profPic = "https://graph.facebook.com/" + user.id + "/picture";
    localStorage.COLORSUser = JSON.stringify(colorsUser);

    window.location = "colors.html";
        // Make this fancier, eventually.
}

function logout() {
    FB.logout(function(response) {
        localStorage.removeItem("COLORSUserName");
        localStorage.removeItem("COLORSUserID");
    });
}