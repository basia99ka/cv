AOS.init();
/*SCROLL-NAVBAR*/
$(function () {
  $(document).scroll(function () {
      var $nav = $("#mainNavbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

/*INTRO*/

gsap.from('.planets',{opacity:0,duration:1,ease:'bounce',y:'-10vh', delay:2})
gsap.from('.rocket',{opacity:0,duration:1,ease:'bounce',y:'-10vh', delay:2})

