<?php 
session_start();
$ruta = "vistas" . DIRECTORY_SEPARATOR;
if(!isset($_SESSION["usuario"])){
    $vista = "nombre.php";
}else{
    $vista = "cuestionarios.php";
}

require("modelo" . DIRECTORY_SEPARATOR . "funciones.php");
require("controladores" . DIRECTORY_SEPARATOR . "controlador.php");
// require("controladores" . DIRECTORY_SEPARATOR . "");
?>

<html>
    <head>
    <title>Examen PHP</title>
    </head>
    <body>
        <?php include $ruta . "mensajes.php" ?>
        <?php require $ruta . $vista ?>
        <?php if($vista != "nombre.php" && $vista != "responder.php" && $vista != "agregar.php" && $vista != "respuestas.php"): ?>
            <?php require $ruta . "cerrar.php" ?>
        <?php endif ?>
    </body>
</html>