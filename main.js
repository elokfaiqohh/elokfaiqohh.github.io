swal("This website is still under development.");
var typed = new Typed(".auto-type", {
    strings : ["Elok", "Student", "Programmer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

window.addEventListener('scroll', () =>{
  document.querySelector('header').classList.toggle
  ('window-scroll', window.scrollY > 700)
})