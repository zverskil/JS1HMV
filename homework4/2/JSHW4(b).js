var nomer = prompt("Введите ваш номер телефона(BY):");
var proverka = nomer.match(/^[\+\s]?(375)[\-\s\(]?(44)|(25)|(29)|(33)[\)\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/);
if(proverka != null){
	alert("Ваш номер телефона правильный!");
}
else{
	alert("Перепроверьте правильность номера телефона!");
}
if(proverka = nomer.match(37529)){
	alert("Ваш оператор Velcom или МТС");
}
else if(proverka = nomer.match(37533)){
	alert("Ваш оператор МТС");
}
else if(proverka = nomer.match(37525)){
	alert("Ваш оператор life:)");
}
else {
	alert("Такого оператора нет в Беларуси!");
}

