var hero = $('.hero');
$( document ).ready(function() {


  if (isMobile()){
    hero.css('height', $(window).height())
  }

  if (hero.hasClass('hero--project')){
    // var anim = anime({
    //   targets: '.hero-image',
    //   translateY: [
    //      { value: 20, duration: 1200, delay: 0, elasticity: 0 },
    //    ],
    //    direction: 'alternate',
    //    easing: 'easeInOutCirc',
    //    loop: true
    // });
  }

});
