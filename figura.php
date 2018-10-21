<html> 
 <body> 
   <?php 
     
   $n1=$_GET['numero']; 
    
   for ($b=1;$b<=$n1;$b++) 
   {for ($a=1;$a<=$b;$a++) 
   {echo '*';} 
    echo '<br>'; 
   } 

  ?> 
 </body> 
</html>