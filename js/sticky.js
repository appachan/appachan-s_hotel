'use strict'

//window.addEventListener('DomContentLoaded', function() {
window.onload = function() {
  let header = document.getElementById('navbar');
  let headerOffsetTop = header.offsetTop;

  window.addEventListener('scroll', function() {
    if (document.body.scrollTop > headerOffsetTop) {
      header.classList.add('is_fixed');
    } else {
      header.classList.remove('is_fixed');
    }
  });
};
//});
