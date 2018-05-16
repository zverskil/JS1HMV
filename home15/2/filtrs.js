var black = document.getElementById('black');
var negativ = document.getElementById('negativ');
var sepia = document.getElementById('sepia')
var canva = document.getElementById('canva');
var img = new Image();
var csv = canva.getContext("2d");
img.onload = function(){
	csv.drawImage(img,0,0);
}
img.src = "image.jpg";
var imgW = img.width;  
        var imgH = img.height;  
        canva.width = imgW;  
        canva.height = imgH;  
black.addEventListener('click',function(img){
var imgPixels = csv.getImageData(0, 0, imgW, imgH);
        for(var y = 0; y < imgPixels.height; y++){  
            for(var x = 0; x < imgPixels.width; x++){  
                var i = (y * 4) * imgPixels.width + x * 4;  
                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;  
                imgPixels.data[i] = avg;   
                imgPixels.data[i + 1] = avg;   
                imgPixels.data[i + 2] = avg;  
            }  
        }  
        csv.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
})
negativ.addEventListener('click',function(img){
var imgPixels = csv.getImageData(0, 0, imgW, imgH);
        for(var y = 0; y < imgPixels.height; y++){  
            for(var x = 0; x < imgPixels.width; x++){  
                var i = (y * 4) * imgPixels.width + x * 4;  
                var avg =(imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2])/3;  
                imgPixels.data[i] = 255-avg;   
                imgPixels.data[i + 1] = 255-avg;   
                imgPixels.data[i + 2] = 255-avg; 
            }  
        }  
        csv.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height); 
})
sepia.addEventListener('click',function(img){
var imgPixels = csv.getImageData(0, 0, imgW, imgH);
        for(var y = 0; y < imgPixels.height; y++){  
            for(var x = 0; x < imgPixels.width; x++){  
                var i = (y * 4) * imgPixels.width + x * 4;  
                var avg =(imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2])/3;  
                imgPixels.data[i] = 112-avg;   
                imgPixels.data[i + 1] = 66-avg;   
                imgPixels.data[i + 2] = 20-avg; 
            }  
        }  
        csv.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height); 
})

