<?php

session_start();

if (isset($_REQUEST['close'])) {
    session_destroy();
    // PHP_SELF es equivalente a redirigirse a si mismo
    header('Location: ' . $_SERVER['PHP_SELF']); // Te redirige al script actual (es como empezar de cero)
    exit();
}

// Si no existe la variable de sesión 'visitas' la creamos
if (!isset($_SESSION['visitas'])) {
    $_SESSION['visitas'] = 0; // Igualada a 0
}
$_SESSION['visitas']++; // Y aumentamos en 1 por cada reload (F5) a la página

echo "Esta es tu visita número " . $_SESSION['visitas'] . ". PESADO PARA DE CLICKAAAAAARRRRR!!!!";
echo "<br> Tu IP es: " . $_SERVER['REMOTE_ADDR'];


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="#" method="get">
        <br>
        <input type="submit" name="close" value="Cerrar la sesión">
    </form>
</body>

</html>