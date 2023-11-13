document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
      dotColor: '#000000',
      lineColor: '#000000'
    });
    var main = document.getElementById('main');
    main.style.marginTop = - main.offsetHeight / 2 + 'px';
  }, false);
  
  