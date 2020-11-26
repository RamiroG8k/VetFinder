var slideIndex = 0;

(function document_ready(){
  setTimeout(showSlides, 0);
})()

function showSlides() {
  var slides = document.getElementsByClassName("slides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
  // Change image every 2 seconds
}
