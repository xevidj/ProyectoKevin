<!DOCTYPE html>
<html>
 <head>
  <title>Prueba de PHP</title>
 </head>
 <meta charset="UTF-8">
 <body>
 <?php 
     
   $n1=(int)$_POST['textfield']; 
    
   for ($b=1;$b<=$n1;$b++) 
   {for ($a=1;$a<=$b;$a++) 
   {echo '*';} 
    echo '/n'; 
   } 

  ?> 
 </body>
</html>