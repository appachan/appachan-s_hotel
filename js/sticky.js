'use strict'

//window.addEventListener('DomContentLoaded', function() {
window.onload = function() {
  var header = document.getElementById('navbar');
  var headerOffsetTop = header.offsetTop;

  window.addEventListener('scroll', function() {
    var scrollTop = document.body.scrollTop > document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
    if (scrollTop > headerOffsetTop) {
      header.classList.add('is_fixed');
    } else {
      header.classList.remove('is_fixed');
    }
  });
};
//});
