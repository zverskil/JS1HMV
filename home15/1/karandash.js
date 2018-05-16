var canva = document.getElementById('canva');
var csv = canva.getContext("2d");
var w = canva.width;
var h = canva.height;
var mouse = {
	x:0,
	y:0
};
csv.strokeStyle = "green";
var draw = false;
canva.addEventListener("mousedown",function (e) {
	mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
            draw = true;
                csv.beginPath();
                	csv.moveTo(mouse.x, mouse.y);
})
canva.addEventListener("mousemove", function(e){
	if(draw==true){
		mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
                csv.lineTo(mouse.x, mouse.y);
                    csv.stroke();
                }
});
canva.addEventListener("mouseup", function(e){
	mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
			csv.lineTo(mouse.x, mouse.y);
                csv.stroke();
                	csv.closePath();
                		draw = false;
});