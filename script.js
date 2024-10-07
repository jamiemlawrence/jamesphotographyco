// script.js

document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href; 
    var navLinks = document.querySelectorAll("nav a");

    // Remove 'active' class from all links
    navLinks.forEach(function(link) {
        link.classList.remove("active");
    });

    // Add 'active' class to the corresponding link
    var currentLink = currentUrl.endsWith("index.html") ? document.getElementById("home-link") : document.getElementById(currentUrl.split("/").pop().split(".")[0] + "-link");

    if (currentLink) {
        currentLink.classList.add("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector("nav");
    var burgerMenu = document.querySelector(".burger-menu");

    // Toggle burger menu visibility on burger icon click
    burger.addEventListener("click", function () {
        burgerMenu.classList.toggle("show");
        nav.classList.remove("show"); // Hide old nav items
    });

    // Close burger menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!burger.contains(event.target) && !burgerMenu.contains(event.target)) {
            burgerMenu.classList.remove("show");
            nav.classList.remove("show"); // Hide old nav items
        }
    });
});

