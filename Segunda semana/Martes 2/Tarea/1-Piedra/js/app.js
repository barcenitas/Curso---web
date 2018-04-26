var numero = prompt("Piedra[0]\nPapel[1]\nTijera[2]\n");
var random=Math.floor(Math.random() * 3);

if(numero!=random){
  alert("Ganaste: "+numero)
}else if(numero==random){
 alert("No ganaste: "+numero)
}



