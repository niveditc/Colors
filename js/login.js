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

    console.log(colorsUser.name);

    window.location = "colors.php";
        // Make this fancier, eventually.
}

function logout() {
    window.location = "index.php";

    FB.logout(function(response) {
        localStorage.removeItem("COLORSUserName");
        localStorage.removeItem("COLORSUserID");

    });
}
