const drop = document.querySelector(".dropdown");
const menu = document.querySelector(".menu");

let slideIndex = 1;
showSlides(slideIndex);
// defults to the picture as the first

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
// adds or removes from the slide index and the picture conected to it.

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("ad");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // Cheaks IF somthing has been pressed and IF it is pressed it will change the section
}

drop.addEventListener("click", () => {
  menu.classList.toggle("close");
});
// Cheacks for when the button is clicked to add another class

window.addEventListener("scroll", () => {
  const primary = document.querySelector(".atari2");
  primary.classList.toggle("scroll", window.scrollY > 60);
});
// Add a class when scrolled far down enough in the y axis
