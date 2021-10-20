// look into "arrow function"
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = document.getElementsByClassName("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stops flicker error message

    if (username.value === '') {
        errorMsg[0].innerHTML = 'Please provide a username'
        failureIcon[0].style.opacity = "1"
    }
    else {
        errorMsg[0].innerHTML = "";
    }
});