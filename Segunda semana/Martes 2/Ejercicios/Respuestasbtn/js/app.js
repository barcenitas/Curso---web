function mostrarDatos() {
	var contador=1;
	var A='A',B='B',C='C',D='D',E='E';
	var opciones=[A,B,C,D,E];
	var num_preguntas=120;
	var salida=
	'<h2>Hoja de respuestas </h2>'+
	'<form name="formulario">'+ 
	'<label for="nombre">Nombre</label>'+
	'<input type="text" name="nombre"><br>'+
	'<ol>'; //lista ordenada
	for (var i = 1; i <=num_preguntas; i++) { 
		salida+='<li>';//li cada una de los elementos
		for (var j = 0; j < 5; j++){
			salida+= '<input id="test'+contador+'" type="radio" name="pregunta['+i+']" value="'+opciones[j]+'"/>'+
				'<label for="test'+contador+'">'+opciones[j]+'</label>';
			contador++;
		}
		salida+='</li>';
	}
	document.getElementById("lista_preg").innerHTML=salida;
}
