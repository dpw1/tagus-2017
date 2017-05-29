
var ps = document.querySelectorAll(".hidden");
var articles = document.querySelectorAll("article");
var pWatchers = [];
var articleWatchers = [];
for(let i = 0; i < ps.length; i++) {
  pWatchers.push(scrollMonitor.create(ps[i]))
}
for(let i = 0; i < articles.length; i++) {
  articleWatchers.push(scrollMonitor.create(articles[i]))
}
pWatchers.forEach(function(watcher, index) {
  watcher.enterViewport(function() {
    ps[index].classList.remove("hidden")
  })
});
articleWatchers.forEach(function(watcher, index) {
  watcher.enterViewport(function() {
    articles[index].style.top = 0;
    articles[index].style.opacity = 1;
  })
});
