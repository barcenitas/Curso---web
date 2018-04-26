	
	function agregar(){
	var texto = document.getElementById("addLista").value;
	var node = document.createElement("LI");
	var textnode = document.createTextNode(texto);
	node.appendChild(textnode);
	document.getElementById("lista1").appendChild(node);
	document.getElementById("addLista").value = "";
}

	function borra(){
		var bnum = document.getElementById("borrarE").value;
		var lista = document.getElementById("LI");
		lista.removeChild(lista.childNodes[bnum]);
	}