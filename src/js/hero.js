var hero = $('.hero');
$( document ).ready(function() {


  if (isMobile()){
    hero.css('height', $(window).height())
  }

  // if (hero.hasClass('hero--project')){
  //   var anim = anime({
  //     targets: '.hero-center',
  //     width: [
  //        { value: '90%', duration: 0, delay: 0, elasticity: 0 },
  //        { value: '35%', duration: 1500, delay: 0, elasticity: 0 }
  //      ]
  //   });
  // }

});
