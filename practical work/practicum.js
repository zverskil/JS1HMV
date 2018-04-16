function inputs(element) {
    return document.getElementById(element).value;
}
function clearAll(value) {
    document.getElementById("calculatortable").value = value;
}
function otvet() {
    try {
      var dispValue = eval(inputs("calculatortable").toString());
      if (dispValue.toString().indexOf("Infinity") !== -1)
      dispValue = "Error";
      document.getElementById("calculatortable").value = dispValue.toString();
      } catch (e) {
      document.getElementById("calculatortable").value = "Error";
}}
function trigoperations(operation){
    try {
    var dispValue;
    switch (operation) {
    case 'sin':
    return   dispValue = clearAll(Math.sin(inputs("calculatortable")));
    case 'cos':
    return dispValue = clearAll(Math.cos(inputs("calculatortable"))); 
    case 'tan':
    return  dispValue = clearAll(Math.tan(inputs("calculatortable"))); 
    case 'asin':
    return  dispValue = clearAll(Math.asin(inputs("calculatortable"))); 
    case 'acos':
    return  dispValue = clearAll(Math.acos(inputs("calculatortable"))); 
    case 'atan':
    return  dispValue = clearAll(Math.atan(inputs("calculatortable"))); 
}
    if (dispValue.toString().indexOf("Infinity") == -1)
    dispValue = "Error";
} catch (e) {
  document.getElementById("calculatortable").value = "Error";
}}
function operationwithx(operation){
    try {
  var dispValue;
  switch (operation) {
  case '2' : 
  return  dispValue = clearAll(Math.pow(inputs("calculatortable"),2))  ;
  case '3' : 
  return  dispValue = clearAll(Math.pow(inputs("calculatortable"),3))  ;
  case '1/2' : 
  return  dispValue = clearAll(Math.pow(inputs("calculatortable"),0.5));
  case '-1' : 
  return  dispValue = clearAll(Math.pow(inputs("calculatortable"),-1));
}
  if (dispValue.toString().indexOf("Infinity") == -1)
  dispValue = "Error";
  document.getElementById("calculatortable").value = "+0";
  } catch (e) {
  document.getElementById("calculatortable").value = "Error";
}}
function base(){
  if (checkForError())
  return;
  document.getElementById("base").value = inputs("calculatortable");
  clearAll("0");
}
function exponenta(){
if (checkForError()) return;
  var base = document.getElementById("base").value;
  var exponent = inputs("calculatortable");
  var resultPow = Math.pow(base,exponent);
  clearAll(resultPow);
}
function logarifm(){
  if (checkForError())  return;
  document.getElementById("logarifm").value = inputs("calculatortable");
  clearAll("0");
}
function logotab(){
  if (checkForError()) return;
  var base = document.getElementById("logarifm").value;
  var number = inputs("calculatortable");
  clearAll(Math.log(number)/Math.log(base));
  
          };
function constanta(constNumber){
  try {
  var dispValue;
  switch (constNumber) {
    case 'Pi' : 
  return  dispValue = clearAll(Math.PI);
    case 'E' : 
  return  dispValue = clearAll(Math.E);
    case 'lnE' : 
  return  dispValue = clearAll(1);
    case 'log2E' : 
  return  dispValue = clearAll(Math.LOG2E);
    case 'logE10' : 
  return  dispValue = clearAll(Math.LN10);
}
  if (dispValue.toString().indexOf("Infinity") == -1)
  dispValue = "Error";
  document.getElementById("calculatortable").value = "+0";
 } catch (e) {
document.getElementById("calculatortable").value = "Error";
}}
function checkForError() {
var currentValue = inputs("calculatortable");
if (currentValue.toString().indexOf("Error") === -1)
return false;
return true;
}
function buttons(val) {
if (checkForError())
return;
var currentValue = document.getElementById("calculatortable").value;
if (currentValue === "0")
clearAll(val);
else {
currentValue = currentValue.toString() + val.toString();
clearAll(currentValue);
}}
function memoryRecall() {
if (checkForError())
return;
var memory = document.getElementById("calculatormemory").value;
if (memory.length === 0)
return;
clearAll(memory);
}
function clearMe() {
if (checkForError())
return;
var currentValue = getInputValue("calculatortable ");
if (currentValue.length === 1)
clearAll("0");
else
clearAll(currentValue.substr(0, currentValue.length - 1));
}
function memory() {
if (checkForError())
return;
document.getElementById("calculatormemory").value = inputs("calculatortable");
}
function iz10v2(){
if (checkForError()) return;
var numDec = +inputs("calculatortable");
var decimal = numDec.toString(2);
clearAll(decimal); 
}
function iz2v10(){
if (checkForError()) return;
clearAll(parseInt (inputs("calculatortable"), 2)); 
}
function iz10v8(){
if (checkForError()) return;
var numDec = +inputs("calculatortable");
var decimal = numDec.toString(8);
clearAll(decimal); 
}
function iz8v10(){
if (checkForError()) return;
clearAll(parseInt (inputs("calculatortable"), 16)); 
}