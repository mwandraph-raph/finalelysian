// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// function showSlide(index) {
//   if (index < 0) {
//     index = totalSlides - 1;
//   } else if (index >= totalSlides) {
//     index = 0;
//   }

//   const offset = -index * 100;
//   document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
//   currentIndex = index;
// }

// function nextSlide() {
//   showSlide(currentIndex + 1);
// }

// function prevSlide() {
//   showSlide(currentIndex - 1);
// }

// setInterval(nextSlide, 5000); // Change slide every 5 seconds
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  x[slideIndex-1].style.animationName = "slideFromRight";
  setTimeout(carousel, 8000); // Change image every 2 seconds
}
