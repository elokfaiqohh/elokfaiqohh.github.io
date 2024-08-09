swal("This website is still under development.");
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
const Email = document.getElementById("email");
const Message = document.getElementById("message");

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

  if (!submitButton.disabled) {
    // Kirim data form ke Formspree menggunakan AJAX
    const formData = new FormData(form);
    fetch('https://formspree.io/f/xzzpgrke', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        swal("Form submitted successfully!");
        window.location.reload(); // Refresh halaman
      } else {
        swal("Error submitting form. Please try again.");
      }
    })
    .catch(error => {
      swal("Error submitting form. Please try again.");
      console.error('Error:', error);
    });
  }
});

function validateEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}