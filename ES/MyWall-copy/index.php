<?php
// Recuperamos o creamos la sesión
session_start();
// Establecemos una variable con el directorio de la vistas
$ruta = "vistas" . DIRECTORY_SEPARATOR;
// Establecemos la vista predeterminada que corresponda en función de si el usuario se ha identificado o no.
if (isset($_SESSION["usuario"])) {
    $vista = "muro.php";
} else {
    $vista = "identificacion.php";
}

// Incluimos las funciones
require("modelo" . DIRECTORY_SEPARATOR . "funciones.php");
// Incluimos los controladores
require("controladores" . DIRECTORY_SEPARATOR . "controladorUsuarios.php");
require("controladores" . DIRECTORY_SEPARATOR . "controladorMuros.php");
?>

<!-- Mostramos la página con la vista correspondiente -->

<html>
    <head>
        <title>MyWall</title>
    </head>

    <body>
        <?php include $ruta . "menu.php" /* include menú */ ?>
        <!-- include porque un mensaje no es importante o grave -->
        <?php include $ruta . "mensajes.php" ?>
        <!-- Incluimos el contenido -->
        <?php require $ruta . $vista ?>
        <?php include $ruta . "footer.php" /* include pie de página */ ?>
    </body>
</html>