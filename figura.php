<html>
<head>
<title>Fiugura</title>
</head>
<body>
<?php
    
   $n1=$_GET["numero"];
   
   for ($b=1;$b<=$numero;$b++)
   {for ($a=$n1;$a>=$b;$a--)
   {
       echo '*  ';
   }
    echo '<br>';
   }
 
  ?>
<p><a href="javascript:history.go(-1)">Back</a></p>
</body>
</html>