function formvalidate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";

    if (email.indexOf("@") == -1) {
        text = "Enter a valid e-mail...";
        error.innerHTML = text;
        return false;
    } else if (password.length < 10) {
        text = "Enter a valid password...";
        error.innerHTML = text;
        return false;
    } else {
        return true;
    }
}