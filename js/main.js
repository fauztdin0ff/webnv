
$(document).ready(function () {

   //Works gallery
   var swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
         el: '.swiper-pagination',
      },
      navigation: {
         nextEl: ".swiper-navigation__btn.next",
         prevEl: ".swiper-navigation__btn.prev",
      },
      breakpoints: {
         320: {
            slidesPerView: 1.5,
            spaceBetween: 15,
         },
         631: {
            slidesPerView: 3,
            spaceBetween: 25,
         },

      }
   });

   /* Page Scroll to id fn call */
   $(".main-nav__link, .footer__link, .to-top,  a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector: "a"
   });

   /* demo functions */
   $("a[rel='next']").click(function (e) {
      e.preventDefault();
      var to = $(this).parent().parent("section").next().attr("id");
      $.mPageScroll2id("scrollTo", to);
   });

   $("a[rel='m_PageScroll2id']").mPageScroll2id({
      offset: 94
   });

   if ($(window).width() < 870) {
      $("a[rel='m_PageScroll2id']").mPageScroll2id({
         offset: 0
      });
   }

   if ($(window).width() > 870) {

      $('.main-nav__link,.footer__link').on('click touch', function () {
         let href = $(this).attr('href');

         $('.main-nav__link')
            .removeClass('active')
            .filter('[href="' + href + '"]')
            .addClass('active');
      });

      $('.to-top').on('click touch', function () {
         setTimeout(() => {
            $('.main-nav__link').removeClass('active')
         }, 1000);

      });
   }


   var objToStick = $(".to-top"); //Получаем нужный объект
   var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

   $(window).scroll(function () {
      var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно
      if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
         $(objToStick).addClass("active");
      } else {
         $(objToStick).removeClass("active");
      };
   });

   const icons = document.querySelectorAll('.nav-open');
   icons.forEach(icon => {
      icon.addEventListener('click', (event) => {
         icon.classList.toggle("open");
      });
   });

   $('.nav-open').on('click touch', function () {
      $('.main-nav').slideToggle();
      $('.header').toggleClass("active");
   });


   if ($(window).width() < 870) {
      $('.main-nav__link').on('click touch', function () {
         $('.main-nav').slideUp();
         $('.nav-open').removeClass('open');
         $(this).removeClass('active');
      });
   }
});
