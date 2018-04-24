var video=document.querySelector("video");
video.addEventListener("loadedmetadata", function(){
	video.loop=true;
})
var playbutt = document.getElementById('playbtn')
playbutt.addEventListener("click",function(){
	if(video.paused){
		video.play();
	}
	else{
		video.pause();
	}
})
var stopbtn = document.getElementById('stopbtn');
stopbtn.addEventListener("click",function(){
	video.currentTime = 0;
	video.pause();
})
var nosound = document.getElementById('noMusic')
nosound.addEventListener("click",function(){
	if(video.muted == false){
		video .muted = true
	}
	else{
		video.muted = false
	}
})
sound.addEventListener("input",function(){
	var sound=document.getElementById("sound").value;
	video.volume=sound/100;
})
var vidtime = document.getElementById('Timevid')
vidtime.addEventListener("input",function(){
	video.currentTime=vidtime.value;
})
var div = document.getElementById('time')
video.addEventListener("loadedmetadata", function(){
	vidtime.setAttribute("max",parseInt(video.duration));
	setInterval(function(){
		vidtime.value=parseInt(video.currentTime);
		var hh=parseInt(video.currentTime/3600);
		var mm=parseInt(video.currentTime/60);
		var ss=parseInt(video.currentTime%60);
		var h=parseInt(video.duration/3600);
		var m=parseInt(video.duration/60);
		var s=parseInt(video.duration%60);
		if(h>=0 && h<10){
			h="0"+h;
		}
		if(hh>=0 && hh<10){
			hh="0"+hh;
		}
		if(m>=0 && m<10){
			m="0"+m;
		}
		if(mm>=0 && mm<10){
			mm="0"+mm;
		}
		if(ss>=0 && ss<10){
			ss="0"+ss;
		}
		if(s>=0 && s<10){
			s="0"+s;
		}
		div.innerText=hh+":"+mm+":"+ss+"/"+h+":"+m+":"+s;
	},1000);
},true)
var fast = document.getElementById('fast');
fast.addEventListener("click",function(){
    video.play();
    video.playbackRate +=0.1;
})
var norm = document.getElementById('norm');
norm.addEventListener("click",function(){
    video.play();
    video.playbackRate = 1;
})
var low = document.getElementById('low');
low.addEventListener("click",function(){
    video.play();
    video.playbackRate -= 0.1;
})