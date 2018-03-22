var stroka = prompt("Введите строку:");
function skobki(){ 		
	var count = 0;
		for (var i = 0; i <= stroka.length; i++) {
			if (stroka[i] == "(") {
				count++;
			} else if(stroka[i] == ")") {
				count--;
			}
		}
		if(count == 0){
			console.log("Good");
		}
		else if(count !=0){
				console.log("Fail");
		}
		
	}
	skobki();