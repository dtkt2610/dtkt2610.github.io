$(document).ready(function () {
  $(".nav-toggle").click(function () {
    $("ul.responsive-main-menu").toggleClass('tran-on');
  });
  $(".nav-close-toggle").click(function () {
    $("ul.responsive-main-menu").toggleClass('tran-on');
  });

  // $(".nav-toggle-search").click(function () {
  //   $(".responsive-search").toggleClass('tran-on-2');
  // });
  $(".nav-toggle-search").click(function () {
      $(".responsive-search").fadeToggle(1000,"linear");
  });
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    // slidesPerView: 2,
    // spaceBetween: 30,
    breakpoints: {                  // responsive slide 
      100: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      490: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // 1024: {
      //   slidesPerView: 5,
      //   spaceBetween: 50,
      // },
    },
    autoplay:                       // tự động trượt slide 
    {
      delay: 2000,
      disableOnInteraction: false,        // tắt khi tương tác
    },

  });
});