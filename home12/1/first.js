var xhr=new XMLHttpRequest;
xhr.open("GET","text.txt",true);
xhr.onload=function(){
	var x=0;
	var table=document.createElement("table");
	document.body.appendChild(table);
	var tbody=document.createElement("tbody");
	table.appendChild(tbody);
	var N=this.responseText;
	for(var i=0; i<N;i++){
	var tr=document.createElement("tr");
	tbody.appendChild(tr);
	for(var j=0; j<N;j++){
		var td=document.createElement("td");
		var num = ++x;
		for(var k=1; k<=10;k++){
			td.innerText+=num+" * "+k+" = "+num*k+"; ";
		}
		tr.appendChild(td);
		}
	}
}
xhr.send(null);