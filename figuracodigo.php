<?php
  if(isset($_POST["submit"]) && !empty($_POST["submit"])) {
    $nombre = $_POST["nombre"];
    echo "<b>" .$nombre . "</b>";
  }
?>
<html>
  <head>
  </head>
  <body>
    <form method="POST">
      <input type="text" name="nombre">
      <br>
      <input type="submit" name="submit" value="Enviar Formulario">
    </form>
  </body>
</html>