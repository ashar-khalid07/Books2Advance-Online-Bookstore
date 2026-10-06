document.addEventListener("DOMContentLoaded", function () {
    const yearSelect = document.getElementById("expYear");
    const currentYear = new Date().getFullYear();

    for (let year = currentYear; year <= currentYear + 10; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
});

function validateCardNumber(cardNumber) {
    return /^5[1-5]\d{14}$/.test(cardNumber);
}

function validateCVV(cvv) {
    return /^\d{3,4}$/.test(cvv);
}

function validateExpiry(month, year) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const selectedYear = Number(year);
    const selectedMonth = Number(month);

    return selectedYear > currentYear ||
        (selectedYear === currentYear && selectedMonth >= currentMonth);
}

function validateForm() {
    const cardNumberError = document.getElementById("cardNumberError");
    const expiryError = document.getElementById("expiryError");
    const cvvError = document.getElementById("cvvError");
    const generalError = document.getElementById("generalError");

    [cardNumberError, expiryError, cvvError, generalError].forEach((element) => {
        element.textContent = "";
        element.style.display = "none";
    });

    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expMonth = document.getElementById("expMonth").value;
    const expYear = document.getElementById("expYear").value;
    const cvv = document.getElementById("cvv").value.trim();

    let isValid = true;

    if (cardNumber === "") {
        cardNumberError.textContent = "Please enter a test card number.";
        cardNumberError.style.display = "block";
        isValid = false;
    } else if (!validateCardNumber(cardNumber)) {
        cardNumberError.textContent = "Use a 16-digit Mastercard-style test number beginning 51 to 55.";
        cardNumberError.style.display = "block";
        isValid = false;
    }

    if (expMonth === "" || expYear === "") {
        expiryError.textContent = "Please select an expiry month and year.";
        expiryError.style.display = "block";
        isValid = false;
    } else if (!validateExpiry(expMonth, expYear)) {
        expiryError.textContent = "The selected expiry date has passed.";
        expiryError.style.display = "block";
        isValid = false;
    }

    if (cvv === "") {
        cvvError.textContent = "Please enter a test security code.";
        cvvError.style.display = "block";
        isValid = false;
    } else if (!validateCVV(cvv)) {
        cvvError.textContent = "The test security code must contain 3 or 4 digits.";
        cvvError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        sessionStorage.setItem("lastFourDigits", cardNumber.slice(-4));

        // The public portfolio version deliberately performs no payment request
        // and stores no full card number or security code.
        document.getElementById("cardNumber").value = "";
        document.getElementById("cvv").value = "";
        window.location.href = "success.html";
    }

    return false;
}
