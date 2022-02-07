$(document).ready(function () {
  $('.reviews-slick-slider').slick({
    infinite: true,
    speed: 300,
    prevArrow: $("#left-arrow"),
    nextArrow: $("#right-arrow"),
    fade: true,
    swipe: false,
    draggable: false,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $('.reviews-slick-slider').on('afterChange', function (event, slick, currentSlide) {
    $('#rev-num').text('0' + (currentSlide + 1))
  });

  $(".first-slider").slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      }
    ]
  });

  $(".second-slider").slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      }
    ]
  });


  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("accordion-active");
      var our_text = this.lastElementChild;
      if (our_text.style.maxHeight) {
        our_text.style.maxHeight = null;
      } else {
        our_text.style.maxHeight = our_text.scrollHeight + "px";
      }
    });
  }
});
