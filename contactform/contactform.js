
jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.contactForm').submit(function(e) {
    let processing = document.getElementById('submitprocess');
    processing.style.display = 'flex';
    e.preventDefault(); // Prevent the default form submission

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxLNxpJlgPbwLC5ou8yWlM4IWSRgnRZPbS8iYVNBD4xQpr4g_clKY4FzWt1F3B3W6NBvQ/exec';
    const form = document.forms['formName'];

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (response.ok) {
            processing.style.display = 'none';
            alert("Thank you! Your form is submitted successfully.");
        } else {
          processing.style.display = 'none';
          alert("An error occurred while submitting the form. Please try again.");
        }
      })
      .catch(error => {
        alert("An error occurred while submitting the form. Please try again.");
        console.error('Error!', error.message);
      });
  });
});
