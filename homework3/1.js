var X=prompt("Vvedite X");
var N=prompt("Vvedite razmer massiva");
var arr=new Array(N).fill(0);
for(var i=0;i<N;i++)
{
	console.log(arr[i]);
}
arr=arr.map(function(elem){return Math.round(100*Math.random());});
for(var i=0;i<N;i++)
{
	console.log(arr[i]);
}
arr=arr.map(function(elem){return elem%22;});
for(var i=0;i<N;i++)
{
	console.log(arr[i]);
}
arr=arr.filter(function(elem){return elem!=5&&elem!=12&&elem!=21;});
for(var i=0;i<N;i++)
{
	console.log(arr[i]);
}
arr.sort(function(a,b){return (a%5)<(b%5)?1:-1});
for(var i=0;i<N;i++)
{
	console.log(arr[i]);
}
X=arr.reduce(function(a,b,i){console.log(a);return a+=b*Math.pow(X,i);},0);
console.log(X);