# Online Bookstore – Books2Advance

Books2Advance is a front-end bookstore project that presents a responsive catalogue of four books and a demonstration checkout flow. The checkout validates Mastercard-style test data in the browser and submits it to an MMU teaching API; it is not a production payment system and should only be used with test details.

## Features

- Responsive four-book catalogue with cover images, descriptions and prices
- Mobile navigation menu controlled with JavaScript
- Client-side Mastercard number, expiry-date and CVV validation
- `fetch` request to the supplied university teaching payment API
- Success page that displays only the last four submitted card digits using `sessionStorage`
- Clear validation and network-error messages

## Technologies

- HTML5
- CSS3
- JavaScript
- Fetch API
- Web Storage (`sessionStorage`)

## Screenshots

![Books2Advance catalogue](screenshots/home.png)

## Getting Started

No build step is required. From the repository directory, start a simple local web server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

The catalogue and client-side interface run locally. The checkout submission depends on the external MMU teaching API referenced in `js/payment.js`, so that final request may be unavailable outside the original teaching environment. Do not enter real payment-card details.

## Project Structure

```text
index.html        Catalogue page
pay.html          Demonstration checkout form
success.html      Success/confirmation page
css/styles.css    Responsive styling
js/               Navigation, validation, API request and success-page logic
images/           Book-cover assets
screenshots/      Verified portfolio screenshot
```

## Testing

No automated test suite is included. During portfolio preparation, the local catalogue, responsive navigation and JavaScript validation functions were browser-checked. The external payment request was mocked for that check so no card data was transmitted.

## What I Worked On

This was an individual project. My work represented here includes the page structure, responsive CSS, mobile navigation, checkout validation, `fetch` request flow and success-page handling.

## Further Improvements

Potential future improvements include carrying the selected book into the checkout, adding a real basket, moving payment processing and validation to an appropriate backend/payment provider, expanding accessibility testing and adding automated browser tests. These are not current features.
