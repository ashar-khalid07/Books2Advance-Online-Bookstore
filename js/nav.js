document.addEventListener("DOMContentLoaded", function () {
    var hamburgerBtn = document.getElementById("hamburgerBtn");
    var mainNav = document.getElementById("mainNav");
    var navIsOpen = false;
    hamburgerBtn.addEventListener("click", function () {
        if (navIsOpen === false) {
            mainNav.classList.add("open");
            navIsOpen = true;
        } else {
            mainNav.classList.remove("open");
            navIsOpen = false;
        }
    });
});