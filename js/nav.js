/*NOTE - Hamburger button ONLY works for users on phone*/
document.addEventListener("DOMContentLoaded", function () { 
    /*wait 'til HTML page loads, THEN runs code*/



    var hamburgerBtn = document.getElementById("hamburgerBtn");
    var mainNav = document.getElementById("mainNav");

    var navIsOpen = false;

    hamburgerBtn.addEventListener("click", function () {
        /*"listens" for the click event*/

        if (navIsOpen === false) {
            mainNav.classList.add("open");
            navIsOpen = true;
        } else {
            mainNav.classList.remove("open");
            navIsOpen = false;
        }
    });
});