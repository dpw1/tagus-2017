var menu = $('.menu__icon');

$('.menu__icon').on('click', function(){

  $(this).find('svg').toggleClass('cross');
});
