alert("This website is still in development");
const contactForm = document.getElementById("contact-form");
const loader = document.querySelector(".loading");

loader.style.display = "none";

contactForm.addEventListener("submit", function(e){
    loader.style.display = "block";
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
    .then(() =>{
    //url thankyou
        window.location.href = "thanks.html"
        loader.style.display = "none";
    })
    .catch((e) => alert("Error!! Please refresh the home page"))
})