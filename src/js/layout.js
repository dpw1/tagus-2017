var el = $('.layout__image');
var elementWatcher = scrollMonitor.create( el );


$( document ).ready(function() {

  elementWatcher.enterViewport(function() {
    var anim = anime({
      targets: '.layout__image',
      translateX: [
         { value: '-100vw', duration: 0, delay: 0, elasticity: 0 },
         { value: 0, duration: 2000, delay: 500, elasticity: 0 }
       ],
       opacity: [
          { value: 0, duration: 0, delay: 0, elasticity: 0 },
          { value: 1, duration: 5000, delay: 500, elasticity: 0 }
        ],
        easing: 'easeOutExpo',
    });

  });



});
