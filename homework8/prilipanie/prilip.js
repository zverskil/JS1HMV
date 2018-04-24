var div = document.getElementById("ttt");
var body = document.getElementsByTagName("body")[0];
console.log(window.innerHeight);
  window.addEventListener("scroll",function(){  
    console.log(window.scrollY)
    if(window.scrollY > 3000 && window.scrollY <= 7000){
      div.style.top = window.scrollY + "px";
}})