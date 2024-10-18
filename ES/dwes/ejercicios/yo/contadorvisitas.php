<?php
    session_start(); // Inicia sesión

    // Si no existe la variable de sesión 'visitas' la creamos
    if(!isset($_SESSION['visitas'])) {
        $_SESSION['visitas'] = 0; // Igualada a 0
    }
    $_SESSION['visitas']++; // Y aumentamos en 1 por cada reload (F5) a la página
    
    echo "Esta es tu visita número " . $_SESSION['visitas'] . ". PESADO PARA DE CLICAAAAAARRRRR!!!!";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>