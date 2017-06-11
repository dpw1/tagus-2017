var el = $('.layout__image');
var elementWatcher = scrollMonitor.create( el );


$( document ).ready(function() {

  elementWatcher.enterViewport(function() {
    var left = anime({
      targets: '.layout__image--left',
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

    var right = anime({
      targets: '.layout__image--right',
      translateX: [
         { value: '200vw', duration: 0, delay: 0, elasticity: 0 },
         { value: 0, duration: 2000, delay: 500, elasticity: 0 }
       ],
       opacity: [
          { value: 0, duration: 0, delay: 0, elasticity: 0 },
          { value: 1, duration: 5000, delay: 500, elasticity: 0 }
        ],
        easing: 'easeOutExpo',
    });

      this.destroy();
  });



});
