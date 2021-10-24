// look into "arrow function"
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let emptyCheck = (index) => {
  let entryNum = classes("input");
  if (entryNum[index].value === "") {
    errorMsg[index].innerHTML = `Please provide your ${entryNum[index].name}`;
    failureIcon[index].style.opacity = "1";
  } else {
    errorMsg[index].innerHTML = "";
    failureIcon[index].style.opacity = "0";
    successIcon[index].style.opacity = "1";
  }
};

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stops flicker error message
  for (let i = 0; i < 3; i++) {
    emptyCheck(i);
  }
});
