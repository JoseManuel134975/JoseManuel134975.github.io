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
        <?php include $ruta . "usuario.php" ?>
        <?php include $ruta . "mensajes.php" ?>
        <?php require $ruta . $vista ?>
    </body>
</html>