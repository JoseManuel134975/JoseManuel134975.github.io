<?php
session_start();
$ruta = "vistas" . DIRECTORY_SEPARATOR;

if (isset($_SESSION["usuario"])) {
    $vista = "muro.php";
} else {
    $vista = "identificacion.php";
}

require("modelo" . DIRECTORY_SEPARATOR . "funciones.php");
require("controladores" . DIRECTORY_SEPARATOR . "controladorUsuarios.php");
require("controladores" . DIRECTORY_SEPARATOR . "controladorMuros.php");
?>

<html>

<head>
    <title>MyWall</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <?php if ($vista != "identificacion.php"): ?>
        <?php include $ruta . "menu.php" ?>
        <?php include $ruta . "mensajes.php" ?>
        <?php require $ruta . $vista ?>
        <?php include $ruta . "footer.php" ?>
    <?php else: ?>
        <?php require $ruta . $vista ?>
    <?php endif ?>
</body>

</html>