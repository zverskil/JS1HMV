var timer = setInterval(function(){

window.scrollBy(0,20);
if(window.innerHeight + window.scrollY === 10000){
	clearInterval(timer);
}
},40)