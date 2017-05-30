
var ps = document.querySelectorAll(".hidden");
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
