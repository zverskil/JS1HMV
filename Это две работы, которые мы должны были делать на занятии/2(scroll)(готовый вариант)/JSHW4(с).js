var timer=setInterval(function() {
window.scrollBy(0, 20);
if(10000-window.innerHeight < window.scrollY+1) {
clearInterval(X);
}
}, 40)