<?php 
require_once("controladorBloc.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bloc de Notas</title>
</head>
<body>
    <h4>
        <?php if (isset($mensaje)) echo $mensaje ?>
    </h4>
    <form action="index.php">
        <input type="submit" value="Cerrar sesión" name="accion"/>
    </form>
    <form>
        <div>
            <textarea rows="10" cols="120" name="contenido"><?php echo $contenido; ?></textarea>
        </div>
        <label>Fichero</label>
        <input type="text" name="nombre_fichero" value="<?php echo $nombre_fichero; ?>" />
        <input type="submit" value="Abrir" name="accion"/>
        <input type="submit" value="Guardar" name="accion"/>
        <input type="submit" value="Imprimir en pdf" name="accion"/>
        <input type="submit" value="Explorar" name="accion"/>
        
    <form>
        
</body>
</html>