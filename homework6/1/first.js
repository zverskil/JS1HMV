function Shifrator(){
	firstArea = document.getElementById("shifr");
	SecondArea = document.getElementById("deshifr");

	Shifr = document.getElementsByClassName("First")[0];
	Deshifr = document.getElementsByClassName("Second")[0];

	Shifr.addEventListener("click", function(){
		var qq = firstArea.value;
		var ww = "";
		for(var i = 0; i < qq.length; i++){
			ww += String.fromCharCode(qq.charCodeAt(i)+1);
		}
		SecondArea.value = ww;
	})
	Deshifr.addEventListener("click", function(){
		var qqq = SecondArea.value;
		var www = "";
		for(var i = 0; i < qqq.length; i++){
			www += String.fromCharCode(qqq.charCodeAt(i)-1);
		}
		firstArea.value = www;
	})
}
Shifrator();