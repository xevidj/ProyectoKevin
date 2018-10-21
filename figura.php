<html>
<head>
<title>Figura</title>
</head>
<body>
<?php 
     
   $numero=filter_var($_POST['numero'], FILTER_SANITIZE_STRING); 
    
   for ($b=1;$b<=$numero;$b++) 
   {
   	for ($a=1;$a<=$b;$a++) 
   {
   	echo '*';
	} 
    echo "\n"; 
   } 

  ?> 
<p><a href="javascript:history.go(-1)">Back</a></p>
</body>
</html>