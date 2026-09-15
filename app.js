const form = document.querySelector("form");
const emailOrPhone = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');
const signUpButton = document.querySelector(".sign-up-button");
const socialButtons = document.querySelectorAll(".social-login button");

if (form && emailOrPhone && password) {
form.addEventListener("submit", function (event) {
event.preventDefault();

    if (emailOrPhone.value === "" || password.value === "") {
        alert("Please fill in all fields.");
    } else {
        window.location.href = "dashboard.html";
    }
});
}

if (signUpButton) {
signUpButton.addEventListener("click", function () {
alert("Sign up page will be available soon.");
});
}

socialButtons.forEach(function (button) {
button.addEventListener("click", function () {
alert("Social login will be available soon.");
});
});



//sidebar

const sidebar = document.querySelector(".sidebar");
const menuItems = document.querySelectorAll(".menu-item");
const sidebarToggle = document.querySelector("#sidebarToggle");


menuItems.forEach(function (item) {
item.addEventListener("click", function (event) {


    menuItems.forEach(function (item) {
        item.classList.remove("active");
    });

    item.classList.add("active");
});

});


if (sidebar && sidebarToggle) {

sidebarToggle.addEventListener("click", function () {

    sidebar.classList.toggle("closed");

});

}



//Navbar

const logout = document.querySelector(".logout");

if (logout) {
logout.addEventListener("click", function () {
window.location.href = "index.html";
});
}


//Main Dashboard

const moreDetailsButtons = document.querySelectorAll(".more-details");

moreDetailsButtons.forEach(function (button) {
button.addEventListener("click", function () {
window.location.href = "index.html";
});
});