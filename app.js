//Carrosel
function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) {
    result += mod;
  }
  return result;
}

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


//Botão de voltar 
function classToggle() {
  const navs = document.querySelectorAll('.Navbar_Itens')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar_Link-toggle')
  .addEventListener('click', classToggle);

const menu = document.querySelectorAll('.Navbar_Link');
menu.forEach(item=> item.addEventListener('click', classToggle))


const scrollToTop = () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  })
}