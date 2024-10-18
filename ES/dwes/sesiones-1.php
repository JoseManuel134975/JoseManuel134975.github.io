<?php
    // Iniciamos la sesión. Sino existe, la crea
    session_start();
    // Guardamos el nombre y apellidos en la sesión
    $_SESSION['name'] = "Faker";
    $_SESSION['surname'] = "T1";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="mostrardatos.php">Mostrar los datos del usuario</a>
</body>
</html>