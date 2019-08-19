// Sticky navbar changes css after scroll of 700px
$(window).scroll(function() {
   $('nav').toggleClass('scrolled', $(this).scrollTop() > 700);
});