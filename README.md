# Online Bookstore – Books2Advance

Books2Advance is a front-end bookstore project with a responsive four-book catalogue and a demonstration checkout flow. The public portfolio version keeps the checkout entirely in the browser: it validates test input locally, stores only the final four digits temporarily for the success page, and sends no payment-card data to any external service.

## Features

- Responsive four-book catalogue with cover images, descriptions and prices
- Mobile navigation menu controlled with JavaScript
- Client-side Mastercard-style test-number, expiry-date and security-code validation
- Demo checkout flow with no external payment request
- Success page that displays only the final four digits using `sessionStorage`
- Clear validation messages for invalid form input

## Technologies

- HTML5
- CSS3
- JavaScript
- Web Storage (`sessionStorage`)

## Screenshots

![Books2Advance catalogue](screenshots/home.png)

## Getting Started

No build step is required. From the repository directory, start a simple local web server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

Use test data only. This is a demonstration checkout and does not process real payments.

## Project Structure

```text
index.html        Catalogue page
pay.html          Demonstration checkout form
success.html      Success/confirmation page
css/styles.css    Responsive styling
js/               Navigation, validation and success-page logic
images/           Book-cover assets
screenshots/      Verified portfolio screenshot
```

## Testing

No automated test suite is included. During portfolio preparation, the local catalogue, responsive navigation and JavaScript validation functions were browser-checked.

## What I Worked On

This was an individual project. My work represented here includes the page structure, responsive CSS, mobile navigation, checkout validation and success-page handling.

## Security / Portfolio Cleanup

The original coursework version submitted card details from the browser to a university teaching endpoint. That behaviour is not retained in the public portfolio version. The current implementation performs only local demo validation, sends no payment-card data externally, and stores only the final four digits briefly for display on the success page.

## Further Improvements

Potential future improvements include carrying the selected book into checkout, adding a basket, improving accessibility testing and adding automated browser tests. A real production checkout would require a proper backend and payment provider rather than client-side payment handling.
