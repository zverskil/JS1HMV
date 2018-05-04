var time = new Date();
var divs = document.getElementById('divs');
var listener = function(){
	if( document.body.getBoundingClientRect().bottom < window.innerHeight){
		getItems();
	}
}
var getItems = function(){
	document.removeEventListener('scroll', listener);
	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'news.html', true);
	xhr.onload = function(){
		var x = this.responseText;
		divs.innerHTML += x;
		var news = document.getElementsByClassName('newstop');
		var razm = divs.children[0].children.length;
		for( var j = 0; j < news.length; j++ ){
			if( news[j].innerText == '' ){
				var x = '0' + time.getDate() + '.0' + (time.getMonth() + 1) + '.' + time.getFullYear();
				news[j].innerText = x;
			}
		}
		document.addEventListener('scroll', listener);
	}
	xhr.send(null);
}
document.addEventListener('scroll', listener);
getItems();