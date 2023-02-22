

function fadeOut(el, time) {
    el.style.opacity = 0;
    el.style.transform = 'translateY(-20px)';
  
    let last = +new Date();
    let tick = function() {
        el.style.transition = 'opacity ' + time + 'ms ease-out, transform ' + time + 'ms ease-out';
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
  }

  function fadeIn(el, time) {
    el.style.opacity = 0;
    el.style.transform = 'translateY(-20px)';
  
    let start = null;
    let tick = function(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      let easeOut = 1 - (1 - progress / time) * (1 - progress / time);
      el.style.opacity = Math.min(easeOut, 1);
      el.style.transform = 'translateY(' + (-20 + 20 * el.style.opacity) + 'px)';
  
      if (progress < time) {
        requestAnimationFrame(tick);
      }
    };
  
    requestAnimationFrame(tick);
  }