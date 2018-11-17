

var user_input = document.getElementById("user_input");
var button = document.getElementsByClassName("enter")[0];
var ul = document.querySelector("ul");


function inputLength () {
	return user_input.value.length;
}

function createListElement () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(user_input.value));
	ul.appendChild(li);
	user_input.value = "";
}

function	addListOnClick () {
	if	(inputLength() > 0)	{
		createListElement();
	}
}

function	addListOnPress (event) {
	if	(inputLength() > 0 && event.keyCode == 13 )	{
		createListElement();
	}	
}


button.addEventListener("click",addListOnClick);
user_input.addEventListener("keypress", addListOnPress);

