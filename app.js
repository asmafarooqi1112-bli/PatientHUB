const form = document.querySelector("form");

const emailOrPhone = document.querySelector('input[type="text"]');

const password = document.querySelector('input[type="password"]');

const signUpButton = document.querySelector(".sign-up-button");

const socialButtons = document.querySelectorAll(".social-login button");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    if (emailOrPhone.value === "" || password.value === "") {

        alert("Please fill in all fields.");

    } else {

        alert("Sign in successful!");

    }

});


signUpButton.addEventListener("click", function () {

    alert("Sign up page will be available soon.");

});


socialButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Social login will be available soon.");

    });

});