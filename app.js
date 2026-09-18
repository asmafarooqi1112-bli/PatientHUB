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


const viewButtons = document.querySelectorAll(".view-button");

viewButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        viewButtons.forEach(function (button) {

            button.classList.remove("active");

        });

        button.classList.add("active");

    });

});


const mapButton = document.getElementById("Mapbutton");
const listButton = document.getElementById("Listbutton");

const mapContent = document.getElementById("MapContent");

const clinicCard1 = document.getElementById("ClinicCard1");
const clinicCard2 = document.getElementById("ClinicCard2");


mapContent.style.display = "block";

clinicCard1.style.display = "none";
clinicCard2.style.display = "none";

mapButton.classList.add("active");
listButton.classList.remove("active");


mapButton.addEventListener("click", function () {

    mapContent.style.display = "block";

    clinicCard1.style.display = "none";
    clinicCard2.style.display = "none";

    mapButton.classList.add("active");
    listButton.classList.remove("active");

});


listButton.addEventListener("click", function () {

    mapContent.style.display = "none";

    clinicCard1.style.display = "flex";
    clinicCard2.style.display = "flex";

    listButton.classList.add("active");
    mapButton.classList.remove("active");

});