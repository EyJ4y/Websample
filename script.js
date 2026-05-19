const form = document.getElementById('booking-form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullName = document.getElementById('full-name')?.value?.trim();
  const email = document.getElementById('email')?.value?.trim();
  const phone = document.getElementById('phone')?.value?.trim();
  const nights = document.getElementById('nights')?.value;

  if (!fullName || !email || !phone || !nights) {
    alert('Please complete all required fields before submitting your booking.');
    return;
  }

  alert(`Thank you, ${fullName}!\nYour booking request for ${nights} room night(s) has been submitted. We will contact you soon.`);
  form.reset();
});
