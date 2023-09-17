
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");



function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) {
    result += mod;
  }
  return result;
}

//  function setUpCarousel(carousel) {
//     function handleNext() {
//       currentSlide = modulo(currentSlide + 1, numSlides);
//       changeSlide(currentSlide);
//     }

//     function handlePrevious() {
//       currentSlide = modulo(currentSlide - 1, numSlides);
//       changeSlide(currentSlide);
//     }

//     function changeSlide(slideNumber) {
//       carousel.style.setProperty('--current-slide', slideNumber);
//     }

//      // get elements
//     const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
//     const buttonNext = carousel.querySelector('[data-carousel-button-next]');
//     const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
//    
//     // carousel state we need to remember
//     let currentSlide = 0;
//     const numSlides = slidesContainer.children.length;

//     // set up events
//     buttonPrevious.addEventListener('click', handlePrevious);
//     buttonNext.addEventListener('click', handleNext);
//   } 
class Carousel {
  constructor(carousel) {
    // find elements
    this.carousel = carousel;
    this.buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
    this.buttonNext = carousel.querySelector('[data-carousel-button-next]');
    this.slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

    // state
    this.currentSlide = 0;
    this.numSlides = this.slidesContainer.children.length;

    // add events
    this.buttonPrevious.addEventListener('click', this.handlePrevious.bind(this));
    this.buttonNext.addEventListener('click', this.handleNext.bind(this));
  }

  handleNext() {
    this.currentSlide = modulo(this.currentSlide + 1, this.numSlides);
    this.carousel.style.setProperty('--current-slide', this.currentSlide);
  }

  handlePrevious() {
    this.currentSlide = modulo(this.currentSlide - 1, this.numSlides);
    this.carousel.style.setProperty('--current-slide', this.currentSlide);
  }
}

const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(carousel => new Carousel(carousel));