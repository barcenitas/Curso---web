function aestilos(){
	var estilo = document.getElementById("estilo").value;
	document.getElementById("aplicar").style.color = estilo;
	document.getElementById("estilo").value = "";
}