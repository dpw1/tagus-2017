/* Words */
var val;
var words = document.getElementsByClassName("word");
var wordsWatcher = [];

for (val of words) {
    appendSpan(val);
}

function animateWord(eachDelay){
      var animate = anime({
    targets: '.word__bar',
    translateX: [
      { value: '100%', delay: function(el, i, l) { return i * eachDelay; }, duration: '450'},
      { value: '200%', delay: 210, duration: '500'}
    ],
    easing: 'easeInOutCirc',
    complete: function(anim) {
        $(anim.animatables).each(function(){
          //console.log(this.target.remove());
        });
      }
  });
}

function appendSpan(el){
    var firstTextNode = el.firstChild;
    var newSpan = document.createElement('span');
    var barSpan = document.createElement("span");
    newSpan.className = 'word__toAnimate';
    barSpan.className = 'word__bar'

    newSpan.appendChild( document.createTextNode(firstTextNode.nodeValue) );
    newSpan.appendChild(barSpan);

    el.replaceChild( newSpan, firstTextNode );
}

for(let i = 0; i < words.length; i++) {
  wordsWatcher.push(scrollMonitor.create(words[i]))
}
wordsWatcher.forEach(function(watcher, index) {
  watcher.enterViewport(function() {
    animateWord(250);
  })
});



/* Projects animation */

var articles = document.querySelectorAll(".project-name");
var articleWatchers = [];

for(let i = 0; i < articles.length; i++) {
  articleWatchers.push(scrollMonitor.create(articles[i]))
}
articleWatchers.forEach(function(watcher, index) {
  watcher.enterViewport(function() {
    articles[index].style.transform = "translateY(0)";
    articles[index].style.opacity = 1;
  })
});
