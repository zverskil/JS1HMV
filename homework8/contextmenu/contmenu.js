var menu= document.getElementById("men");
var x=0;
menu.addEventListener("mouseover",function(){
	x=1;
})
menu.addEventListener("mouseout",function(){
	x=0;
})
var y=document.addEventListener("click",function(e){
	if(window.innerHeight-e.clientY>95&&window.innerWidth-e.clientX>155){
		menu.style.top = e.clientY+"px";
		menu.style.left = e.clientX+"px";
		menu.style.opacity = 1;
	}else{
		menu.style.top = e.clientY+"px";
		menu.style.left = e.clientX+"px";
		if(window.innerHeight-e.clientY<95){
			menu.style.top = e.clientY-92+"px";
		}
		if(window.innerWidth-e.clientX<155){
			menu.style.left=e.clientX-150+"px";
		}
		menu.style.opacity = 1;	
	}

});
if(x==0){
	y;
}