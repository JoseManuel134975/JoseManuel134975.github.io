<?php 
    session_start();

    // SI NO EXISTE la variable de sesion, la creamos como array vacío
    if(!isset($_SESSION['carrito'])) {
        $_SESSION['carrito'] = array();
    }

    if($_REQUEST['accion']) {
        // Recogemos el valor del campo de texto* 
        $valor = $_REQUEST['valor'];
        // *y lo añadimos al array
        array_push($_SESSION['carrito'], $valor);
        var_dump($_SESSION['carrito']);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mecanismo de carrito</title>
</head>
<body>
    <form action="">
        <input type="text" name="valor" id="">
        <input type="submit" value="Guardar" name="accion">
        <input type="submit" value="Mostrar carrito" name="accion">
    </form>
</body>
</html>