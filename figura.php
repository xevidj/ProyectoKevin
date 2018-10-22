<html>
 <head>
  <title>Prueba de PHP</title>
 </head>
 <body>
 <?php 
     
   $n1=$_GET['numero']; 
    
   for ($b=1;$b<=$n1;$b++) 
   {for ($a=1;$a<=$b;$a++) 
   {echo '*';} 
    echo '/n'; 
   } 

  ?> 
 </body>
</html>