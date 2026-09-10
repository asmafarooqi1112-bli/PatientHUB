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
const resizer = document.querySelector(".sidebar-resizer");
const menuItems = document.querySelectorAll(".menu-item");

let isResizing = false;

const maxWidth = 200;
const closeWidth = 30;

menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        menuItems.forEach(function (item) {
            item.classList.remove("active");
        });

        item.classList.add("active");
    });
});

if (sidebar && resizer) {
    resizer.addEventListener("mousedown", function (event) {
        event.preventDefault();

        isResizing = true;

        document.body.style.userSelect = "none";
    });

    document.addEventListener("mousemove", function (event) {
        if (!isResizing) {
            return;
        }

        let newWidth = event.clientX;

        if (newWidth <= closeWidth) {
            sidebar.classList.add("closed");
            sidebar.style.width = "8px";
            resizer.style.left = "0px";
        } else {
            sidebar.classList.remove("closed");

            if (newWidth > maxWidth) {
                newWidth = maxWidth;
            }

            sidebar.style.width = newWidth + "px";
            resizer.style.left = newWidth + "px";
        }
    });

    document.addEventListener("mouseup", function () {
        isResizing = false;
        document.body.style.userSelect = "auto";
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