<html>
<head>
<title>Figura</title>
</head>
<body>
<?php
	//Tamaño de la línea más larga, la de enmedio de ambos triángulos
$num = 8;
	//bucle para el triángulo superior
for($n=1; $n <= $num; $n++){
    echo str_pad('', $n, '*') . '/n';
}
//bucle para el triángulo invertido
for($n=$num - 1; $n >= 1; $n--){
    echo str_pad('', $n, '*') . '/n';
}
?>
<p><a href="javascript:history.go(-1)">Back</a></p>
</body>
</html>