<html>
<head>
<title>Figura</title>
</head>
<body>
<?php 
     
   $n1=(int)$_GET[numero]; 
    
   for ($b=1;$b<=$n1;$b++) 
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