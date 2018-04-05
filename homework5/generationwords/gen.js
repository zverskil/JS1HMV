var gen = function(){
	var generation = document.getElementById('generation');
	var div = document.createElement('div');
	var x = elem();
	div.setAttribute("class","div");
	div.innerText = x.auction();
	generation.appendChild(div);
}
var names = ["Доналд", "Кеннет", "Мэтью", "Богдан", "Аскольд", "Казимир", "Евстигней", "Владлен",
			 "Чеслав", "Эдуард", "Олег", "Данила", "Елизар", "Эвелина", "Пелагея", "Оксана", "Эмилия",
			  "Елена", "Мирослава", "Изабелла", "Лидия", "Екатерина", "Галина"];
var pokupki = ["Дом", "Машина", "Лыжи", "Фотоаппарат", "Набор посуды", "Часы", "Ноутбук", "Мотоцикл", "Велосипед",
				 "Стол", "Стул", "Кулон", "Гитара", "Обувь", "Куртка", "PowerBank", "Аудиосистема","Монитор", "Телевизор", "DVD"];
var city = ["Белогорск", "Мичуринск", "Полевской", "Фрязино", "Балаково", "Минск", "Чусовой",
			 "Старый Оскол", "Владивосток", "Михайловка", "Салават", "Северск", "Егорьевск", "Донецк", "Кизляр", "Волжский",
			 	 "Санкт-Петербург", "Березовский", "Чехов", "Уфа", "Саранск", "Волгоград", "Солнечногорск", "Климовск",
			 	  "Димитровград", "Благовещенск", "Междуреченск"];
function elem(){
	var auct = {};
	auct.name = names[Math.round(Math.random()*names.length-1)];
	auct.pok = pokupki[Math.round(Math.random()*pokupki.length-1)];
	auct.cit = city[Math.round(Math.random()*city.length-1)];
	auct.price = Math.round(Math.random()*(100) + 20);
	auct.auction= function(){
		return this.name+ " выйграл(а) " + this.pok+ " в городе " + this.cit + " , потратив при этом " + this.price + " $ ";
	}
	return auct;
}
	
	var time = 0;
	setInterval(function(){
		window.gen();
		time++;
		if (time>10) {
			(generation.firstChild).remove();
		}
	},1400)