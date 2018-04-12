var mail = document.getElementById("email");
var dop =  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','q',
 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j',
  'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W','E', 'R', 'T', 'Y', 
  'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 
'V', 'B', 'N', 'M', '-', '_', '@', '.',];
mail.addEventListener("keydown",function (e) {
	var prof = false;
	for(var i = 0; i < dop.length; i++){
		if (e.key == dop[i] || e.key == "Backspace") {
			prof = true;
			break;
		}
	}
	if(!prof){
		e.preventDefault();
	}
});