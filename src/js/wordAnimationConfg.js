
! function() {
  var word = document.querySelectorAll(".block-revealer__child");
  var wordWatcher = []; //counts total words on the page
  var delay = 290;
  var i = 0; //counts words on sight

  console.time('animation')
  for(let i = 0; i < word.length; i++) {
    console.log(i);
    wordWatcher.push(scrollMonitor.create(word[i]))
  }
  wordWatcher.forEach(function(watcher, index) {


      watcher.enterViewport(function() {

      function animateWord(x, callback) {
        new RevealFx(word[index], {
          revealSettings: {
            bgcolor: "#e1253b",
            // offset: '-=2500',
            delay: 0,
            duration: 0,
            onCover: function(anim) {
              anim.style.transition = '.7s',
              anim.style.opacity = 1,
              showWord();
            },
            onComplete: function(){
              showWord();
              setTimeout(removeSpan, 250);
            }
          }
        }).reveal();
      }

      function showWord(){
        word[index].getElementsByClassName("block-revealer--hidden")[0].style.opacity = '1';
      }
      function removeSpan(){
        var string = (word[index].innerText || word[index].textContent)
        $(word[index]).parent().text(string);
      }

      setTimeout(animateWord, i * delay );

      i+=1;

  });
});
  console.timeEnd('animation')
  i = 0;
}();
