/*payment.js for CARD VALIDATIION*/

document.addEventListener("DOMContentLoaded", function () {

    var yearSelect = document.getElementById("expYear"); 
    var currentYear = new Date().getFullYear();

    for (var y = currentYear; y <= currentYear +10; y++) {
        var option = document.createElement("option");
        /*this creates a new option element*/
        option.value = y;
        option.text = y; 
        yearSelect.appendChild(option); 
    }

});



function validateCardNumber(cardNumber) {
    var regex = /^5[1-5]\d{14}$/;
    return regex.test(cardNumber); 
    /*.test() returns true if matches, false if not */
}



function validateCVV(cvv) {
    var regex = /^\d{3,4}$/;
    return regex.test(cvv);
}



function validateExpiry(month, year) {
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1; 
    /*0 for january, so +1 */

    var selectedYear = Number(year);
    var selectedMonth = Number(month); 
    if (selectedYear > currentYear) {
        return true;
    }

    if (selectedYear === currentYear && selectedMonth >= currentMonth) {
        return true;
    }

    return false;
}



function validateForm() {

    var cardNumberError = document.getElementById("cardNumberError"); 
    /*card number error span*/

    cardNumberError.textContent = "";
    cardNumberError.style.display = "none";
    var expiryError = document.getElementById("expiryError");
    expiryError.textContent = "";
    expiryError.style.display = "none";

    var cvvError = document.getElementById("cvvError");
    cvvError.textContent = ""; 
    /*Clear any old message */

    cvvError.style.display = "none";
    var generalError = document.getElementById("generalError");
    generalError.textContent = "";
    generalError.style.display = "none";



    var cardNumber = document.getElementById("cardNumber").value.trim();
    var expMonth = document.getElementById("expMonth").value;
    var expYear = document.getElementById("expYear").value;
    var cvv = document.getElementById("cvv").value.trim();

    var isValid = true;



    if (cardNumber === "") {
        cardNumberError.textContent = "Please enter your card number.";
        cardNumberError.style.display = "block";
        isValid = false;
    } else if (!validateCardNumber(cardNumber)) {
        cardNumberError.textContent = "Card number must be 16 digits and start with 51 to 55 (Mastercard).";
        cardNumberError.style.display = "block";
        isValid = false;
    }



    if (expMonth === "" || expYear === "") {
        expiryError.textContent = "Please select an expiry month and year.";
        expiryError.style.display = "block";
        isValid = false;
    } else if (!validateExpiry(expMonth, expYear)) {
        expiryError.textContent = "This card has expired. Please use a valid card.";
        expiryError.style.display = "block";
        isValid = false;
    }



    if (cvv === "") {
        cvvError.textContent = "Please enter your security code.";
        cvvError.style.display = "block";
        isValid = false;
    } else if (!validateCVV(cvv)) {
        cvvError.textContent = "Security code must be 3 or 4 digits.";
        cvvError.style.display = "block";
        isValid = false;
    }


    /*if none of the checks above...*/
    if (isValid) { 
        sendPayment(cardNumber, expMonth, expYear, cvv);
    }

    return false;
}



function sendPayment(cardNumber, expMonth, expYear, cvv) {

    var apiUrl = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard";

    var paymentData = {
        master_card: Number(cardNumber),
        exp_year: Number(expYear),
        exp_month: Number(expMonth),
        cvv_code: cvv 
    };

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(paymentData)
    })

    .then(function (response) {
        if (response.ok) {

            sessionStorage.setItem("lastFourDigits", cardNumber.slice(-4));
            window.location.href = "success.html";

        } else {

            response.json().then(function (data) {
                var generalError = document.getElementById("generalError");
                generalError.textContent = "Server error: " + data.message;
                generalError.style.display = "block"; 
            });

        }

    })

    .catch(function (error) {
        var generalError = document.getElementById("generalError");
        generalError.textContent = "Could not reach the server. Please check your connection and try again.";
        /* network error*/
        generalError.style.display = "block";
        console.error("Network error:", error);
    });

}