var tabl = prompt("Введите желаемый размер таблицы: ");
var table=document.createElement("table");
var tbody=document.createElement("tbody");
document.body.appendChild(table);
table.appendChild(tbody);
var colors = ["black", "dimgray", "firebrick", "red", "sienna", "darkorange",
 				"burlywood", "darkolivegreen", "limegreen", "lime", "lightseagreen",
 					 "cyan", "dodgerblue", "mediumblue", "indigo", "mediumorchid",
 					 	 "crimson", "lightpink", "navy", "deeppink", "mediumvioletred"]
for(var i = 0; i < tabl; i++){
	var tr = document.createElement("tr");
	for(var j = 0; j < tabl; j++){
		var td = document.createElement("td");
		tr.appendChild(td);
		}
	tbody.appendChild(tr);
}
tbody.addEventListener("mouseover",function(e){
	if(e.target.nodeName=="TD"){
		e.target.style.background = colors[Math.round(Math.random()*(colors.length+1))];
	}
})
tbody.addEventListener("mouseout",function(e){
	if(e.target.nodeName=="TD"){
		e.target.style.background="white";
	}
})