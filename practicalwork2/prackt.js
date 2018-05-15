alert("Для отображения курсов, необходимо подключение к интернету!")
let xhr = new XMLHttpRequest(),
    from = document.querySelector('#from'),
    loader = document.querySelector('#loader'),
    source = document.querySelector('#source')
    content = document.querySelector('#content'),
    result = document.querySelector('#result'),
    to = document.querySelector('#to');
    var button = document.getElementById('but')

xhr.addEventListener("load", onLoad);
xhr.addEventListener("loadstart", onLoadStart);
xhr.addEventListener("loadend", onLoadEnd);

xhr.open("GET", "https://neto-api.herokuapp.com/currency");
xhr.send();

function onLoad() {
  let data = JSON.parse(xhr.responseText);
  str = '';
  for (let item of data) {
    str += `<option value="${item.value}" data-title="${item.title}">${item.code}</option>`;
  }
  from.innerHTML = str;
  to.innerHTML = str;
}

function onLoadStart() {
 loader.classList.remove('hidden');
}

function onLoadEnd() {
  loader.classList.add('hidden');
  content.classList.remove('hidden');
}

source.addEventListener('input', func);
from.addEventListener('input', func);
to.addEventListener('input', func);

function func() {
	but.addEventListener("click",function(){
		  let itemFrom = from.options[from.selectedIndex].value,
      itemTo = to.options[to.selectedIndex].value;
  result.innerHTML = price(+itemFrom, +itemTo, +source.value) + ' ' + to.options[to.selectedIndex].dataset.title;
	})

}

function price(itemFrom, itemTo, val) {
  return (val * itemFrom / itemTo).toFixed(2);
}

