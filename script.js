document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
      event.preventDefault(); 
      alert('Mohon lengkapi form sebelum mengirim.');
    }
  });
});
