<?php
    // Bloque de recogida de datos, comprobaciones, redirecciones, conexiones a BD, inicializaciones, etc...
    // Pero no se escribe nada

    // Debemos comprobar que se hayan enviado los datos
    $dni = "";
    $nombre = "";

    // Si hemos recibido el formulario, recogemos los datos en variables locales a la página
    if (isset($_REQUEST['action'])) { // isset comprueba si las variables/campos están vacíos
        $nombre = $_REQUEST['name'];
        $dni = $_REQUEST['dni'];
    }else{
        $mensaje = "Bienvenido/as a mi página, introuce tu nombre para saludarte";
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludo</title>
</head>
<body>
    <!-- Bloque para mostrar los datos -->
    <p>
        <?php 
            if (isset($mensaje)) {
                echo $mensaje;
            }else{
                echo "Hola $nombre, tu dni es $dni"; 
            }
        ?>
    </p>
    
    <!-- Método GET para comprobar lo que se envía - Método POST para que los datos sean invisibles -->
    <form action="#" method="post"> 
        <label for="nom">Nombre</label>
        <input type="text" name="name" id="nom">
        <label for="dni">DNI</label>
        <input type="text" name="dni" id="dni">
        <input type="submit" value="Saludar" name="action">
    </form>
</body>
</html>