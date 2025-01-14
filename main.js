// swal("This website is still under development.");
var typed = new Typed(".auto-type", {
  strings: ["Elok", "Student", "Programmer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("window-scroll", window.scrollY > 700);
});

const form = document.querySelector('form');
const submitButton = document.getElementById("submit");
const Name = document.getElementById("name");
const nameError = document.getElementById("name-error");
const Email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const Message = document.getElementById("message");
const messageError = document.getElementById("message-error");

form.addEventListener("input", (e) => {
  const isNameEmpty = Name.value.trim() === "";
  const isEmailValid = validateEmail(Email.value.trim());
  const isMessageEmpty = Message.value.trim() === "";

  if (isNameEmpty || !isEmailValid || isMessageEmpty) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // Mencegah pengiriman form secara default

  const formData = new FormData(form);
  fetch('https://formspree.io/f/xzzpgrke', {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  })
    .then(response => response.json()) // Ubah respons menjadi JSON
    .then(data => {
      if (data.ok || data.success) { // Sesuaikan dengan properti dalam respons Formspree
        swal("Success!", "Form submitted successfully!", "success");
      } else {
        swal("Error!", "Error submitting form. Please try again.", "error");
        console.error('Formspree error:', data);
      }
    })
    .catch(error => {
      swal("Error!", "Error submitting form. Please try again.", "error");
      console.error('Network error:', error);
    });
});


function validateEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}