var num1 = prompt("Введите 1-е число:");
var math = prompt("Знак: + , - , * , / ");
var num2 = prompt("Введите 2-е число:");
var result;
switch(math){
	case "+":
		console.log("Результат сложения: " + ( +num1   +   +num2 ));
		break;
	case "-":
		console.log("Результат вычитания: " + ( +num1   -   +num2 ));
		break;
	case "*":
		console.log("Результат умножения: " + ( +num1   *   +num2 ));
		break;
	case "/":
		console.log("Результат деления: " + ( +num1   /   +num2 ));
		break;

default:
alert(result = "Ошибка!");
break;

}