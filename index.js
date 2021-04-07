let userVersion = [];
let i = 0;
let alleditable = document.querySelectorAll('.js-editable')

let data = sessionStorage.getItem("items");
data = JSON.parse(data);

if (data) {
	Array.from(alleditable).forEach(function (item) {
		item.innerHTML = data[i];
		i++;
	})
}

let buttonEditable = document.querySelector('.js-editable-button');
toggle_visibility(false);

document.addEventListener('keypress', function (e) {
  if ((e.ctrlKey || e.metaKey) && e.code == 'KeyZ') {
    console.log(e.code + 'adentro');
		console.log(e.metaKey)
		document.querySelectorAll('.js-editable').forEach((el) => {
			el.contentEditable = true;
			el.style.backgroundColor = '#feff00';
			toggle_visibility(true);
		})
    return;
  }
	console.log(e.code);
	console.log(e.ctrlKey + ' ctrl');
	console.log(e.metaKey + ' meta');
});

function editno() {
	document.querySelectorAll('.js-editable').forEach((el) => {
		el.contentEditable = false;
		toggle_visibility(false);
		el.style.backgroundColor = 'transparent';
	})
}

function toggle_visibility(show) {
  buttonEditable.style.display = show ? 'block' : 'none';
}


function save() {
	Array.from(alleditable).forEach(function(item){
		userVersion.push(item.textContent);
	})

	userVersion.forEach(function(user, index) {
		sessionStorage.setItem("items", JSON.stringify(userVersion));
	})
}

