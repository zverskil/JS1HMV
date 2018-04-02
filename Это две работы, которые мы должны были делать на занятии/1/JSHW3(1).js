var N =+ prompt("Введите размерность массива: ");
var arr = new Array(N);
arr.fill(0);
	console.log("Массив заполнен нулями:" , arr);
var arr = arr.map(function(e) {
  return e+Math.round(100*Math.random());
});
	console.log("Заполняем массив рандомными числами от 0 до 100", arr);
var arr = arr.map(function(e){
	return e%22;
});
	console.log("Находим остаток от деления массива на 22", arr);
var arr = arr.filter(function(e) {
	return e !== 5 && e !== 12 && e !== 21;
});
	console.log("Выкидываем из массива числа 5, 12, 21", arr);	
var arr = arr.sort(function(a,b){
	return (a%5)>(b%5) ? 1 : -1;
});
	console.log("Сортируем массив по остатку от деления на 5", arr);	
var x = arr.reduce(function(i,j) {
	return (1/j) + i;
});
var H = arr.length/x;
	console.log("Среднее гармоническое", H);