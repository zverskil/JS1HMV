var date = new Date ();
console.log("Дата и время в данный момент: " + date);
var data = new Date (date.getFullYear(), date.getMonth(), date.getDate()+1);
var tomorrow = ((data - date)/60000);
console.log("Минут до завтрашнего дня: " + Math.round(tomorrow));