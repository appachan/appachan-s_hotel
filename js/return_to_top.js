'use strict'

$(function(){
  var toTopButton = document.getElementById('pagetop');
  toTopButton.addEventListener('click', function() {
    window.scrollTo(0,0);
    return false;
  });
});
