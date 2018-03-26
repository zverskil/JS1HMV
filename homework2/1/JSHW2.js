var N =  prompt("Введите количество элементов массива:");
var s = prompt("Введите опорный элемент:");
var p = (prompt("Введите процент значений:")/100);
var x = 0, summa = 0;
var arr = new Array();
for(var i = 0; i < N; i++){
	var mas = Math.round(Math.random()*s + s*p); 
		if(mas > (s-(s*p)) && mas < (s+(s*p))) {  
			arr[x] = mas; 
				summa += 1/arr[x];
					x++; 

}
arr.sort();
}
console.log("Массив после сортировки: " , arr);
console.log("Среднее гармоническое: " , N/summa);