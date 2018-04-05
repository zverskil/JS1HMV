var div = document.getElementById('time');
var set = setInterval (function () {
	var date = new Date();
	var time = (23 - date.getHours())+":"+(59 - date.getMinutes())+":"+(59 - date.getSeconds());
	div.innerHTML = time;
			if (date.getSeconds()%2 == 0){
			div.setAttribute('style','color:blue; text-align: center; font-size: 600%; outline-style: groove; text-decoration: underline; font-weight: normal; background-color: yellow');
			}
			else div.setAttribute('style','color:green; text-align: center; font-size: 600%; outline-style: inset; font-weight: 900; background-color: aqua');
}, 1000);

