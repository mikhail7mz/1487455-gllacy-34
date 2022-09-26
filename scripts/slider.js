const slides = document.querySelectorAll('.slider__slide');
const buttonPrev = document.querySelector('.slider__toogle-prev');
const buttonNext = document.querySelector('.slider__toogle-next');
const bullets = document.querySelectorAll('.slider__pagination-item');
const slidesAmount = slides.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  const activeSlide = document.querySelector('.slider__slide.active');
  const activeBullet = document.querySelector('.slider__pagination-item.active');

  document.body.classList.remove('theme-pink');
  document.body.classList.remove('theme-blue');
  document.body.classList.remove('theme-yellow');
  document.body.classList.add(`${slides[index].dataset.theme}`);
  activeSlide.classList.remove('active');
  slides[index].classList.add('active');
  activeBullet.classList.remove('active');
  bullets[index].classList.add('active');
};

const onPrevButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slidesAmount - 1;
  }

  onSlideChange(currentIndex);
};

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex++;

  if (currentIndex === slidesAmount) {
    currentIndex = 0;
  }

  onSlideChange(currentIndex);
};

const initSlider = () => {
  buttonPrev.addEventListener('click', onPrevButtonClick);
  buttonNext.addEventListener('click', onNextButtonClick);
  bullets.forEach((element, index) => element.addEventListener('click', () => onSlideChange(index)));
};

initSlider();
