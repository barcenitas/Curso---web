function agregar(){
	alert("no");
	var texto = document.getElementById("crear1").value;
	var node = document.createElement("LI");
	var textnode = document.createTextNode(texto);
	node.appendChild(textnode);
	document.getElementById("miUL").appendChild(node);
	document.getElementById("myText").value = " ";
}


function actualizar(){
	var texto = document.getElementById("actualizar1").value
	var node = document.createElement("LI");
	var textnode = document.createTextNode(texto);
	var item = document.getElementById("miUL").childNodes[1];
	item.replaceChild(textnode,item.childNodes[1]);
}

function borrar(){
	var numDel = document.getElementById("borrar1).value; 
		var lista = document.getElementById("miUL");
	lista.removeChild(lista.childNodes[numDel]);
}
