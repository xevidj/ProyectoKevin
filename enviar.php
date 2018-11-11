<?php

// Llamando a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$ciudad = $_POST['ciudad'];
$provincia = $_POST['contact-provincia_id'];
$canton = $_POST['contact-canton_id'];
$parroquia = $_POST['contact-parroquia_id'];
$mensaje = $_POST['mensaje'];

// Datos para el correo
$destinatario = "kevin7sharely@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Ciudad: $ciudad \n";
$carta .= "Provincia: $provincia \n";
$carta .= "Canton: $canton \n";
$carta .= "Parrouia: $parroquia \n";
$carta .= "Mensaje: $mensaje";

// Enviando Mensaje
mail($destinatario, $asunto, $carta);
header('Location:confirma.html');

?>
