var before = document.querySelector('.controls__btn--before');
var after = document.querySelector('.controls__btn--after');
var sliderToggle = document.querySelector('.controls__toggle');
var catBefore = document.querySelector('.slider__image--before');
var catAfter = document.querySelector('.slider__image--after');
var sliderBackground = document.querySelector('.slider');

before.addEventListener('click', function (evt) {
  evt.preventDefault();
  catBefore.classList.add('slider__image--block');
  catAfter.classList.remove('slider__image--block');
  //управление ползунком в мобильной версии
  sliderToggle.classList.remove('controls__toggle--end');
  sliderToggle.classList.add('controls__toggle--start');
  //управление фоном коты на планшете и десктопе
  sliderBackground.classList.remove('slider--after');
});

after.addEventListener('click', function (evt) {
  evt.preventDefault();
  catBefore.classList.remove('slider__image--block');
  catAfter.classList.add('slider__image--block');
  //управление ползунком в мобильной версии
  sliderToggle.classList.add('controls__toggle--end');
  sliderToggle.classList.remove('controls__toggle--start');
  //управление фоном коты на планшете и десктопе
  sliderBackground.classList.add('slider--after');
});
