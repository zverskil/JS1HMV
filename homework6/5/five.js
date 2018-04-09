var you = document.getElementById("Name");
var phone = document.getElementById("Phone");
var mail = document.getElementById("E-mail");
var site = document.getElementById("Site");
var age = document.getElementById("Vozrast");
var button = document.getElementById("click_me");


function validname(you){
	var x = you.match(/[^a-zA-ZА-Яа-я\s\-]{3,20}$/);
	if (x){
		return true;
	}
	else{
		return false;
	}
}
function validphone(phone){
	var x = phone.match(/^[\+\s]?(375)[\-\s\(]?(44)|(25)|(29)|(33)[\)\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/);
	if (x){
		return true;
	}
	else{
		return false;
	}
}
function validmail(mail){
	var x = mail.match(/^[a-z][a-zA-Z0-9\.]*@[a-z][a-z0-9]*\.[a-z]{2,10}\.?$/);
	if (x){
		return true;
	}
	else{
		return false;
	}
}
function validsite(site){
	var x = site.match(/^(http:|https:)\/\/[A-Za-z]*\.?[a-zA-Zа-яА-Я]{2,}\.[a-zA-Zа-яА-Я]*\.?[a-zA-Zа-яА-Я]{2,}$/);
	if (x){
		return true;
	}
	else{
		return false;
	}
}
function validage(age){
	if(age>=14 && age<=90){
		 return true;
	}
	else{
		return false;
}}

you.addEventListener("input", function(){
	if (validname(this.value)) {
		this.setAttribute("class","Good");
	}
	else{
		this.setAttribute("class","Bad")
	}
});

phone.addEventListener("input", function(){
	if (validphone(this.value)) {
		this.setAttribute("class","Good");
	}
	else{
		this.setAttribute("class","Bad")
	}
});

mail.addEventListener("input", function(){
	if (validmail(this.value)) {
		this.setAttribute("class","Good");
	}
	else{
		this.setAttribute("class","Bad")
	}
});

site.addEventListener("input", function(){
	if (validsite(this.value)) {
		this.setAttribute("class","Good");
	}
	else{
		this.setAttribute("class","Bad")
	}
});

age.addEventListener("input", function(){
	if (validage(this.value)) {
		this.setAttribute("class","Good");
	}
	else{
		this.setAttribute("class","Bad")
	}
});

button.addEventListener("click",function(){
	if(validname(you.value) && validphone(phone.value) && validmail(mail.value) && validsite(site.value) && validage(age.value)){
		alert("Вы успешно прошли авторизацию!");
	}
	else{
		alert("Перепроверьте введённые данные!");
	}
});



