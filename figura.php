<!DOCTYPE html>
<html>
 <head><!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <link rel="stylesheet" href="css/style.css" />
		<link rel="stylesheet" href="css/nivo-slider.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="css/default/default.css" type="text/css" media="screen" />
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
		<script src="jquery.nivo.slider.pack.js" type="text/javascript"></script>
  <title>Prueba de PHP</title>
 </head>
 <meta charset="UTF-8">
 <body>
 <?
     
   $n1=$_POST['numero']; 
    
   for ($b=1;$b<=$n1;$b++) 
   {for ($a=1;$a<=$b;$a++) 
   {echo '*';} 
    echo '/n'; 
   } 

  ?> 
 </body>
</html>