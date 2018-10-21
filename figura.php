<html>
<head>
<title>Fiugura</title>
</head>
<body>
<?php
    
   $n1=(int)$_GET["numero"];
   
   for($n=1; $n <= $n1; $n++){
    echo str_pad('', $n, '*') . '<br />';
		}
 
		for($n=$n1; $n > 0; $n--){
    		echo str_pad('', $n, '*') . '<br />';
		}
 
  ?>
<p><a href="javascript:history.go(-1)">Back</a></p>
</body>
</html>