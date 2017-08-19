$('.slick-gallery').slick({
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.slick-modal').slick({
  dots: false,
  infinite: false,
  speed: 200,
  centerMode: true,
  centerPadding: '20%',
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: true,

  responsive: [
    {
      breakpoint: 1300,
      settings: {
        centerPadding: '15%'
      }
    }
  ]
});
$('.slick-modal-product').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: true
  //autoplay: true,
  //autoplaySpeed: 2000
  //asNavFor: '.slick-modal-nav'
});
// $('.slick-modal-nav').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   asNavFor: '.slick-modal-product',
//   dots: true,
//   //centerMode: true,
//   focusOnSelect: true
// });
$('.slick-product').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: false
  //autoplay: true,
  //autoplaySpeed: 2000
  //asNavFor: '.slick-modal-nav'
});
jQuery(document).ready(function($) {
    $('.sg-modal__close').click(function(event) {
        $(this).closest('.sg-modal').hide();
    });
});