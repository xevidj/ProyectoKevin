$(document).ready(function() {

	$(".formulario-contacto").bind("submit" , function(){

		$.ajax({
			type: $(this).attr("method"),
			url: $(this).attr("action"),
			data: $(this).serialize(),
			success: function(){
				$("#alerta").removeClass("hide").addClass("alert-success");
				$(".respuesta").html()

			//alert("enviado");
			},
			error : function(){
				alert("error");
			}
		});
		return false;
	});
});
