var box=document.getElementById("text");
var but=document.getElementById("button");
var div=document.getElementById("divs");
var imag=document.getElementById("imag");
but.addEventListener("click",function(){
	var text=box.value;
	imag.classList.add("load");
	var xhr=new XMLHttpRequest;
	xhr.open("GET",text,true);
	xhr.onload=function(){
		div.innerHTML=this.responseText;
	}
	xhr.send(null);
});