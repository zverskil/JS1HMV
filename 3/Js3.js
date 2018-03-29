alert("Для просмотра данных, войдите в консоль.");
var peoples = new Array();
var FIO = new Array("Устинов Евгений Сергеевич","Елисеев Никита Фёдорович","Щербаков Милан Андреевич",
	"Волков Остап Романович","Евдокимов Карен Романович","Копылов Матвей Александрович",
	"Архипов Гордей Иванович","Авдеев Ефим Андреевич","Носков Добрыня Александрович","Евсеев Стефан Фёдорович",
	"Савельева Инесса Ивановна","Одинцова Инесса Сергеевна","Абрамова Елена Александровна","Федосеева Анжелика Романовна",
	"Сорокина Людмила Владимировна","Осипова Анастасия Владимировна","Кудрявцева Маргарита Сергеевна","Степанова Варвара Ивановна",
	"Брагина Федосья Сергеевна","Денисова Нонна Фёдоровна");
var otdeli = new Array("​​Расчётный отдел","Материальный отдел","Производственный отдел","Отдел труда и заработной платы","Отдел маркетинга","Планово-экономический отдел",
	"Отдел кадров","Юридическая служба");
for (var i in FIO){
	peoples[i]={
		FIO: FIO[i],
		vozrast: Math.round(Math.random()*(70) + 20),
		nazvanieotdela: otdeli[(Math.floor(Math.random() * otdeli.length))],
		zarplata: Math.round(Math.random()*(600) + 125),
		stazh: Math.round(Math.random()*(80) + 20),
		vivod: function(){
			console.log("Сотрудник: "+this.FIO+", "+this.vozrast+" лет, " +this.nazvanieotdela+", зарплата: "+this.zarplata+ "BYN, стаж работы "+this.stazh+" месяцев");
		}

	}

}
for (var i in peoples){
	peoples[i].vivod();
}

peoples.Dobavlenie=function(){
	peoples.push(man={
			FIO: prompt("Введите ФИО нового сотрудника: "),
			vozrast: Math.round(Math.random()*(70) + 20),
			nazvanieotdela: otdeli[(Math.floor(Math.random() * otdeli.length))],
			zarplata: Math.round(Math.random()*(600) + 125),
			stazh: Math.round(Math.random()*(80) + 20),
			vivod: function(){
			console.log("Сотрудник: "+this.FIO+", "+this.vozrast+" лет, " +this.nazvanieotdela+", зарплата: "+this.zarplata+ "BYN, стаж работы "+this.stazh+" месяцев");
		}	

	})
	peoples.map(function(i){
		i.vivod();
	})
}
console.log("Добавлен новый сотрудник: ")
	peoples.Dobavlenie();

peoples.sortorovka=function(){
	peoples.sort(function(first, second){
		return first.zarplata > second.zarplata ? 1 : -1;
	})
	peoples.map(function(i){
		i.vivod();
	})
}
console.log("После сортировки по возрастанию зарплаты, список сотрудников будет выглядеть следующим образом: ");

peoples.sortorovka();
		peoples.summazarplati = function(){
 			var summ = 0;
 			peoples.map(function(i){
 			summ += i.zarplata;
 })
		return summ;

}
console.log("Сумма зарплаты сотрудников: "+ peoples.summazarplati()+ "BYN");
	
	peoples.minimal=function(){
	let minim = peoples[0].zarplata;
	peoples.map(function(i){
	 	if(i.zarplata<minim){
	 		minim=i.zarplata;
	 	}
	})
	return minim;
}
console.log("Минимальная зарплата у сотрудника предприятия: ", peoples.minimal(), " BYN");

peoples.maximum=function(){
	let maxim = peoples[0].zarplata;
	peoples.map(function(i){
	 	if(i.zarplata>maxim){
	 		maxim=i.zarplata;
	 	}
	})
	return maxim;
}
console.log("Максимальная зарплата у сотрудника предприятия: ", peoples.maximum(), " BYN");

peoples.srednee=function(){
	summ=peoples.summazarplati();
	return Math.round(summ/(peoples.length-1));
}
console.log("Средняя зарплата у сотрудников предприятия: ", peoples.srednee(), " BYN");
 
 var inform = new Array();
peoples.newotdel=function(){
	var otdel = prompt("Введите отдел для получения информации:");
	console.log("Отдел:", otdel);
	summa=0;
	var sredn=0, god=0, srVozrast=0;
	peoples.map(function(i){
		if(otdel==i.nazvanieotdela){
			inform.push(i);
			summa+=i.zarplata;
			god+=i.vozrast;
		}

		srVozrast=Math.round(god/inform.length);	
	 	sredn=Math.round(summa/inform.length);
	
	}) 
	console.log("Зарплата отдела-",otdel,"-составляет: ",summa, "$");
	console.log("Средняя зарплата отдела-",otdel, "-составляет: ",sredn, "$");
	console.log("Количество работников отдела-",otdel,"-составляет: ", inform.length);
	console.log("Средний возраст работника отдела-",otdel, "-составляет: ",srVozrast, "лет");
	for(var i in inform){
		var maxrabot = inform[0].stazh;
		if(inform[i].stazh>maxrabot){
	 			maxrabot=inform[i].stazh;
	 		}
	 	}
	 for(var i in inform){
	 	if(inform[i].stazh == maxrabot){
	 		console.log("В отделе-",otdel,"-самый преданный работник : ");
			inform[i].vivod();
		}
	}
}
peoples.newotdel();