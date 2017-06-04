var hero = $('.hero');
$( document ).ready(function() {
  if (isMobile()){
    hero.css('height', $(window).height())
  }
});
