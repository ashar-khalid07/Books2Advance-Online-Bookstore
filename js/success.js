document.addEventListener("DOMContentLoaded", function () {
    var lastFour = sessionStorage.getItem("lastFourDigits");
    var maskedCardEl = document.getElementById("maskedCard");
    if (lastFour) {
        maskedCardEl.textContent = "**** **** **** " + lastFour;
    } else {
        maskedCardEl.textContent = "Card details not available.";
    }
    sessionStorage.removeItem("lastFourDigits");
});