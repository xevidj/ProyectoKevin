<html>
<head>
<title>Fiugura</title>
</head>
<body>
<?php 
     
   $n1=(int)$_GET[a]; 
    
   for ($b=1;$b<=$n1;$b++) 
   {for ($a=1;$a<=$b;$a++) 
   {echo '*';} 
    echo '<br>'; 
   } 

  ?> 
<p><a href="javascript:history.go(-1)">Back</a></p>
</body>
</html>