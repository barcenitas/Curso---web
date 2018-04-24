var miElemento=document.getElementById("miParrafo");
document.getElementById("insertando").innerHTML="Vamo a agregar el contenido de papu aqui "+miElemento.innerHTML;
var arregloP=document.getElementsByTagName("p");
alert("Hay "+arregloP.length+" \nas");
document.getElementById("insertando").innerHTML='<span>'+'El segundo parrafo, con indice 1: '+arregloP[1].innerHTML+ '</span>';
var listaClase=document.getElementsByClassName("miClase")
listaClase[0].style.color='red';
document.getElementById("camiandoAtributo").src="img/descarga.jpeg";
var lista=document.getElementById("miUl");
lista.removeChild(lista.childNodes[1]);
/*
  appendChild() - agrega un child
  replaceChild() - reemplaza un child
  createElement() - crea un elemento
*/
//solo para clase
//document.getElementById("cambia").className+="miDivAmarillo";
document.getElementById("cambia").setAttribute("class","miDivAmarillo");
