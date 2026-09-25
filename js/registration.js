// Registration page — ticket type selection + basic client-side validation
document.addEventListener('DOMContentLoaded', function () {
  const radioOptions = document.querySelectorAll('.radio-option');

  radioOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      const group = option.closest('.radio-group');
      group.querySelectorAll('.radio-option').forEach(function (o) {
        o.classList.remove('selected');
      });
      option.classList.add('selected');
      option.querySelector('input').checked = true;
    });
  });

  const form = document.getElementById('registration-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // EDIT HERE: replace this alert with a real submission —
      // e.g. fetch() to Google Forms/Typeform endpoint, or your own backend API.
      alert('Thanks for registering! (This form is not yet connected to a backend — see the code comment in js/registration.js)');
      form.reset();
      document.querySelectorAll('.radio-option').forEach(function (o) {
        o.classList.remove('selected');
      });
    });
  }
});
