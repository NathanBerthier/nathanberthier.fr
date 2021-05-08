var i = 1;
const nbImages = 2;

function leftButton() {
	var id = "img" + i;
	id.toString();
	
	if (i > 1) {
		removeClass(id);
		
		i -= 1;
		id = "img" + i;
		id.toString();

		addClass(id);
	} else {
		if (i < nbImages) {
			removeClass(id);
			
			i += 1;
			id = "img" + i;
			id.toString();

			addClass(id);
		}
	}
}

function rightButton() {
	var id = "img" + i;
	id.toString();

	if (i < nbImages) {
		removeClass(id);
		
		i += 1;
		id = "img" + i;
		id.toString();

		addClass(id);
	} else {
		if (i > 1) {
			removeClass(id);
			
			i -= 1;
			id = "img" + i;
			id.toString();

			addClass(id);
		}
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