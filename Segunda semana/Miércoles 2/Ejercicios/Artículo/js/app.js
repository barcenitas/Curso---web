/*

$(elemento).ready(function(){
	
}) ->ready indica que el elemento esta completamente cargado

*/
//eventos en jquery -> elemento le concatenas el evento y despues a la funcion
$(document).ready(function(){
	$("#iraarticulo1").click(function(){
		var posicion = $("#articulo2").offset().top //devolviendo los pixeles del top
		$("html,body").animate({
			scrollTop : posicion 
		},2000);
	})

	$(".btn1").click(function(){
		$(".img-responsive").fadeOut();
	});
	$(".btn2").click(function(){
		$(".img-responsive").fadeIn();
	});
//concatenar metodos
	$("#articulo2")
	.mouseenter(function(){
		$("#articulo2").addClass("cambialetra");
	})
	.mouseout(function(){
		$("#articulo2").removeClass("cambialetra");
	})

});