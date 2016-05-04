document.addEventListener('DomContentLoaded', function() {
  let header = document.getElementById('navbar');
  let body = document.getElementsByTagName('body')[0];
  if ( !header || !body ) {
    console.log('wei');
    return;
  }

  let style = window.getComputedStyle(header);
  let margin = Number(style.marginBottom.replace('px', ''));

  header.style.position = 'fixed';
  header.style.top = 0;
  header.style.zIndex = 9999;
  header.style.width = '100%';
  header.style.backgroundColor = '#fff';
  body.style.marginTop = header.offsetHeight + margin + 'px';
});
