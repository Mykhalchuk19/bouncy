import '../styles/basic.sass';
import '../index.html';
import './svg.js';
require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');
const $ = require('jquery');
$('.details__slider').slick({
  dots: true,
  arrows: false,
  dotsClass: 'slick-dots details__dots',
  cssEase: 'ease-in-out',
});

$('.services__slider').slick({
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  initialSlide: 1,
  adaptiveheight:true,
  dotsClass: 'slick-dots services__dots',
  cssEase: 'ease-in-out',
});

$('.team__slider').slick({
  dots: true,
  arrows: false,
  cssEase: 'ease-in-out',
  dotsClass: 'slick-dots team__dots',
});

$('.testimonials__slider').slick({
  dots: true,
  arrows: false,
  cssEase: 'ease-in-out',
  dotsClass: 'slick-dots testimonials__dots',
});

$('.blog__slider').slick({
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  cssEase: 'ease-in-out',
  dotsClass: 'slick-dots blog__dots',
});


