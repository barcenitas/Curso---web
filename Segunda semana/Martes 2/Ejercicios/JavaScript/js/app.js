var miElementDOM = document.getElementById("miParrafo");
document.getElementById("insertando").innerHTML = "vamos a agregar el contenido de p aquí" + miElementDOM.innerHTML;
var arregloP = document.getElementsByTagName("p");
//alert("Hay " + arregloP.length + " etiquetas <p> en este documento");
document.getElementById("insertando").innerHTML = '<span>' + ' El segundo parrafo, con indice 1: ' + arregloP[0].innerHTML + '</span>'
var listaClases = document.getElementsByClassName("miClase");
listaClases[0].style.color = '#EC1019';
document.getElementById("cambiandoAtributo").src = "images/AA.jpg"
var lista = document.getElementById("miUl");
lista.removeChild(lista.childNodes[1]);
/*
lista.appendChild()
lista.replaceChild()
lista.createElement()
*/
document.getElementById("cambiaClase").setAttribute("class", "miDivAmarillo");
/*
		Como modificar los atributos de una etiqueta:

document.getElementById("cambiaClase").className += "miDivAmarillo";
document.getElementById("cambiaClase").setAttribute("className", "miDivAmarillo")
*/