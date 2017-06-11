var projects = document.querySelectorAll(".project-name");
var pwatcher = [];

for(let i = 0; i < projects.length; i++) {
  pwatcher.push(scrollMonitor.create(projects[i]))
}

pwatcher.forEach(function(watcher, index) {

  watcher.enterViewport(function() {


      var keyframes = anime({
        targets: projects[index],
        translateY: [
          { value: 160, duration: 400, delay: 0, elasticity: 0 },
          { value: 80, duration: 1000, delay: 0, elasticity: 0 }
        ],
        opacity: [
          { value: 1, duration: 1000, delay: 500}
        ],
        easing: 'easeInOutCubic'
      });

      this.destroy();

  });
});
