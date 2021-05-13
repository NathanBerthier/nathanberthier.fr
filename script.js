var i = 1;
const nbImages = 3;

function leftButton() {
	j = 0;
	var id = "img" + i;
	id.toString();

	if (i < nbImages) {
		removeClass(id);
		
		i += 1;
		id = "img" + i;
		id.toString();

		addClass(id);
	} else {
		removeClass(id);
		
		i = 1;
		id = "img" + i;
		id.toString();

		addClass(id);
	}
}

function rightButton() {
	j = 0;
	var id = "img" + i;
	id.toString();

	if (i < nbImages) {
		removeClass(id);
		
		i += 1;
		id = "img" + i;
		id.toString();

		addClass(id);
	} else {
		removeClass(id);
		
		i = 1;
		id = "img" + i;
		id.toString();

		addClass(id);
	}
}

function removeClass(id) {

	var element = document.getElementById(id);
  	element.className = element.className.replace(/\bactive\b/g, "");

}

function addClass(id) {

	var element, name, arr;

	element = document.getElementById(id);
	name = "active";
	arr = element.className.split(" ");
	if (arr.indexOf(name) == -1) {
		element.className += " " + name;
	}
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}