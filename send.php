<?php
$nombre = strip_tags($_POST['name']);
$apellidos = strip_tags($_POST['surname']);
$empresa = strip_tags($_POST['company']);
$departamento = strip_tags($_POST['department']);
$telefono = strip_tags($_POST['phone']);
$correo = strip_tags($_POST['mail']);
$comentario = strip_tags($_POST['comment']);
$fecha = time();
$fechaFormateada = date("j/n/Y", $fecha);
$textoEmisor = "MIME-VERSION: 1.0\r\n";
$textoEmisor .= "Content-type: text/html; charset=UTF-8\r\n";
$textoEmisor .= "From: Formulario creado por DarioBF - www.dariobf.com";
$textoEmisor = "MIME-VERSION: 1.0\r\n";
$textoEmisor .= "Content-type: text/html; charset=UTF-8\r\n";
//Correo de destino; donde se enviará el correo.
$correoDestino = "kevin7sharely@gmail.com";
//Formateo el asunto del correo
$asunto = "Contacto WEB_$nombre $apellidos; de $empresa";
 
//Formateo el cuerpo del correo
$cuerpo = "<b>Enviado por:</b> " . $nombre . ", " . $apellidos . " a las " . $fechaFormateada . "<br />";
$cuerpo .= "<b>Empresa:</b> " . $empresa . ", <b>en el cargo/departamento de</b> " . $departamento . "<br />";
$cuerpo .= "<b>Teléfono de contacto: </b>" . $telefono . "<br />";
$cuerpo .= "<b>E-mail:</b> " . $correo . "<br />";
$cuerpo .= "<b>Comentario:</b> " . $comentario;

mail( $correoDestino, $asunto, $cuerpo, $textoEmisor);

?>
