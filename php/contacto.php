<?php
/*Formulario de contacto HTML5, PHP Y Bootstraps
Creado por: www.render2web.com
Version: 1.1*/

//Comprobamos que se haya presionado el boton enviar
if(isset($_POST['enviar'])){
	//Guardamos en variables los datos enviados
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$telefono = $_POST['telefono'];
	$ciudad = $_POST['ciudad'];
	$pais = $_POST['pais'];
	$mensaje = $_POST['mensaje'];
	
	///Validamos del lado del servidor que el nombre y el email no estén vacios
	if($nombre == ''){
		echo "Debe ingresar su nombre";
	}
	else if($email == ''){
		echo "Debe ingresar su email";
}else{
	$para = "correo@tudominio.com";//Email al que se enviará
	$asunto = "Contacto para su sitio web";//Puedes cambiar el asunto del mensaje desde aqui
	//Este sería el cuerpo del mensaje
	$mensaje = "
		<table border='0' cellspacing='3' cellpadding='2'>
		  <tr>
			<td width='30%' align='left' bgcolor='#f0efef'><strong>Nombre:</strong></td>
			<td width='80%' align='left'>$nombre</td>
		  </tr>
		  <tr>
			<td align='left' bgcolor='#f0efef'><strong>E-mail:</strong></td>
			<td align='left'>$email</td>
		  </tr>
		   <tr>
			<td width='30%' align='left' bgcolor='#f0efef'><strong>Teléfono:</strong></td>
			<td width='70%' align='left'>$telefono</td>
		  </tr>
		  <tr>
			<td width='30%' align='left' bgcolor='#f0efef'><strong>Ciudad:</strong></td>
			<td width='70%' align='left'>$ciudad</td>
		  </tr>
		  <tr>
			<td width='30%' align='left' bgcolor='#f0efef'><strong>País:</strong></td>
			<td width='70%' align='left'>$pais</td>
		  </tr>
		  <tr>
			<td align='left' bgcolor='#f0efef'><strong>Comentario:</strong></td>
			<td align='left'>$mensaje</td>
		  </tr>
	</table>	
";	
	
//Cabeceras del correo
    $headers = "From: $nombre <$email>\r\n"; //Quien envia?
    $headers .= "X-Mailer: PHP5\n";
    $headers .= 'MIME-Version: 1.0' . "\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; //
	
//Comprobamos que los datos enviados a la función MAIL de PHP estén bien y si es correcto enviamos
	if(mail($para, $asunto, $mensaje, $headers)){
		echo "Su mensaje se ha enviado correctamente";
		echo "<br />";
		echo '<a href="../formulario_contacto.html">Volver</a>';
	}else{
		echo "Hubo un error en el envío inténtelo más tarde";
	}
}
}	
?>