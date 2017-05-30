/* Words */
var ps = document.querySelectorAll(".hidden");
var pWatchers = [];
for(let i = 0; i < ps.length; i++) {
  pWatchers.push(scrollMonitor.create(ps[i]))
}
pWatchers.forEach(function(watcher, index) {
  watcher.enterViewport(function() {
    ps[index].classList.remove("hidden")
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
