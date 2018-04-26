var identifier = 1; //начальное значение
function Tovar(name,type,price,releasedate) {// Класс товар
	this.name = name;//Название
	this.type = type;//Тип
	this.identifier = identifier;//Идентификатор
	this.price = price;//Цена
	this.releasedate = releasedate;//Дата выпуска
	identifier++;
}
function ProdovolstvenniiTovar(name,type,price,releasedate,suitableto){//Класс продовольственные товары, унаследованный от класса товар
	this.constructor(name,type,price,releasedate);
	this.suitableto = new Date(suitableto);	//Годен до
	this.periodofstorage = Math.floor((this.suitableto - this.releasedate)/ 3600000 / 24); //Срок годности
}
ProdovolstvenniiTovar.prototype = Object.create(Tovar.prototype);

function Store(name,adress,natsenka){
	this.name = name; //Название магазина
	this.adress = adress;//Адрес
	this.natsenka = natsenka;//Наценка
	this.tovars = new Array();//Массив товаров
	this.dohod = 0;//Прибыль
	this.summtovars = 0;//Сумма всех товаров
}
Store.prototype={
	suumatovarov:function(){//Метод рассчёта суммы товаров в магазине
		var length = this.tovars.length;
		for(var i = 0;i < length;i++ ){
			this.summtovars += this.tovars[i].price;
		}
	},
	addtovar:function(t,n){//Метод добавления товара t количеством n 
		for (var i = 0; i < n; i++) {
			this.tovars.push(t);
		}
		this.suumatovarov();
	},
	spisattovar:function(t,n){//Метод списания товара t в количестве n
		for (var i = 0; i < nh; i++) {
			var length = this.tovars.length;
			for (var j = 0; j < length; j++) {
				if (this.tovars[j].name == t) {
					this.tovars.slice(j,1);	
					break;			
			}
		}
	}
		this.suumatovarov();
},
	prodattovars:function(t,n){//Метод продажи товаров t в количестве n
		this.dohod = n*t.price*this.natsenka;
		this.spisattovar(t,n);
		this.suumatovarov();
	},
	information:function(){//Метод информации о магазине
	console.log(this);
	}
}
function Rinok(){//Создание объекта рынок, состоящего из массивов объекта Store
	this.stores = arguments;
}
Rinok.prototype.information = function(){//Метод вывода инофрмации о рынке
	for (var i = 0; i < this.stores.length; i++) {
		this.stores[i].information();
	}
}
var x = new Tovar("Хлеб", "Пшеничный", 20, 2018-05-28);
var x1 = new Tovar("Молоко", "Стеризованное", 25, 2018-06-30);
var x2 = new ProdovolstvenniiTovar("Сметана","Нежирная", 30,2018-05-30,2018-07-30);
var x3 = new ProdovolstvenniiTovar("Майонез","Жирный", 42,2018-02-19,2018-05-20);
var x4 = new Store("Пятёрочка", "Шаранговича, 49", 10);
var x5 = new Store("Вестер", "Горецкого, 20", 12);
var x6 = new Rinok(x4,x5);