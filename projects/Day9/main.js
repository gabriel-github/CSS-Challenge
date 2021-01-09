const black = document.querySelector('.black')
window.onmousemove =  e => {
  const x = e.clientX;
  black.style.left = x + 'px';
}