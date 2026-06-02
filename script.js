const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

if(navLinks.style.display === "flex"){
navLinks.style.display = "none";
}
else{
navLinks.style.display = "flex";
navLinks.style.flexDirection = "column";
navLinks.style.position = "absolute";
navLinks.style.top = "70px";
navLinks.style.right = "20px";
navLinks.style.background = "#0b4f6c";
navLinks.style.padding = "20px";
navLinks.style.borderRadius = "10px";
}

});

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Appointment Submitted Successfully!");

form.reset();

});
