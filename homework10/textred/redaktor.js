var bold = document.getElementById('btnBld')
bold.addEventListener("click", function () {
	document.execCommand("bold",false,null)
})
var kurs = document.getElementById('btnKurs')
kurs.addEventListener("click", function () {
	document.execCommand("italic",false,null)
})
var podcerk = document.getElementById('btnpodcerk')
podcerk.addEventListener("click", function () {
	document.execCommand("underline",false,null)
})
var zacerk = document.getElementById('btnzacherk')
zacerk.addEventListener("click", function () {
	document.execCommand("strikeThrough",false,null)
})
var btnsize = document.getElementById('sizetext')
btnsize.addEventListener("click",function () {
var sizecl=document.getElementById("size");
	sizecl.setAttribute("placeholder",btnsize.value);
document.execCommand("fontSize", false, sizecl.getAttribute("placeholder"));
})
var backgrcolor = document.getElementById('colortext')
backgrcolor.addEventListener("click",function () {
var colors=document.getElementById("text");
	colors.setAttribute("placeholder",backgrcolor.value);
document.execCommand("foreColor", false, colors.getAttribute("placeholder"));
})
var srift = document.getElementById('garnitura')
srift.addEventListener("click",function () {
var srift1=document.getElementById("font");
	srift1.setAttribute("placeholder",srift.value);
document.execCommand("fontName", false, srift1.getAttribute("placeholder"));
})
var fon = document.getElementById('background')
fon.addEventListener("click",function () {
var fon1=document.getElementById("fone");
	fon1.setAttribute("placeholder",fon.value);
document.execCommand("backColor", false, fon1.getAttribute("placeholder"));
})
var ssilka = document.getElementById('addssilk')
ssilka.addEventListener("click", function () {
	var sss = prompt("Введите ссылку:");
document.execCommand("createlink", false, sss)
})
var delssilka = document.getElementById('delssilk')
delssilka.addEventListener("click", function () {
document.execCommand("unlink", false, null)
})
var addimage = document.getElementById('addimage')
addimage.addEventListener("click", function () {
	var img = prompt("Введите ссылку к картинке:");
document.execCommand("insertImage", false, img)
})
var delet = document.getElementById('delete')
delet.addEventListener("click",function(){
	document.execCommand("delete", false, null);
})
var buttons=document.querySelector(".buttons")
buttons.addEventListener("click",function(e){
	if(e.target.nodeName=="BUTTON" || e.target.nodeName=="OPTION"){
		e.target.classList.toggle("active");
	}
})
var spisok = document.getElementById('ol')
spisok.addEventListener("click",function(){
	document.execCommand('insertorderedlist', false, null );
})
var otst = document.getElementById('addotst')
otst.addEventListener("click",function(){
	document.execCommand('indent', false, null );
})
var delotst = document.getElementById('delotst')
delotst.addEventListener("click",function(){
	document.execCommand('outdent', false, null );
})
var virlew = document.getElementById('livkrai')
virlew.addEventListener("click",function(){
	document.execCommand('justifyleft', false, null );
})
var vircentr = document.getElementById('center')
vircentr.addEventListener("click",function(){
	document.execCommand('justifycenter', false, null );
})
var virprav = document.getElementById('pravkrai')
virprav.addEventListener("click",function(){
	document.execCommand('justifyright', false, null );
})

