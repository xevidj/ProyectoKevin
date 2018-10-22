<!DOCTYPE html>
<html>
 <head>
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