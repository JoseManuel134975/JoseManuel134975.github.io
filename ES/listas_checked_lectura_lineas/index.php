<?php
if (isset($_REQUEST["accion"])) {
    echo "El valor seleccionado de la lista es ".$_REQUEST['numero']."<br/>";
    if (isset($_REQUEST["numeros"])) {
        echo "<br/>Los valores seleccionados de los checkbox's son <br/>";
        foreach ($_REQUEST["numeros"] as $numero) {
            echo $numero."<br/>";
        }
    }

    $f = fopen("archivo.txt","w");
    if ($f) {
        foreach ($_REQUEST["lineas"] as $linea) {
            fwrite($f, $linea.PHP_EOL);            
        }
        fclose($f);
    }

    
    //   var_dump($_REQUEST["numeros"]);

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplos de listas y multiples campos de igual nombre</title>
</head>
<body>
    <form>
        <!-- Rellenar una lista con números -->
        <select name="numero"> 
            <?php for ($i=0; $i<10; $i++): ?>
                <option value="<? echo $i ?>"><? echo $i;?></option>
            <? endfor; ?>
        </select>

        <!-- Crear casillas checkbox's para poder marcar varias y recogerlas -->
        <? for ($i=0; $i<10; $i++): ?>
            <input type="checkbox" id="<?php echo $i?>" name="numeros[]" value="<? echo $i; ?>"/>
            <label for="<?php echo $i ?>"><? echo $i ?></label>
        <? endfor; ?>
        <input type="submit" value="Mostrar" name="accion"/>

        <!-- Crear varios campos de texto para rellenar, recogerlos y grabarlos en un fichero -->
        <?php for ($i=0; $i<5 ; $i++): ?>
            <br/>
            <label>Línea <? echo $i?></label>
            <input type="text" name="lineas[]"/>
        <?php endfor; ?>
        <!-- Mostrar el fichero anterior línea a línea -->
        <?php 
            // Comprobamos que existe previamente
            if (file_exists("archivo.txt")) {
                // Intentamos abrir
                $f = fopen("archivo.txt","r");
                if ($f) {
                    // Si hemos abierto, leemos hasta el final del fichero
                    while (!feof($f)) {
                        // Leemos una línea y la escribimos en la página
                        $linea= fgets($f);
                        echo "<p>$linea</p>";
                    }
                    // Cerramos el fichero
                    fclose($f);
                }
            }
        ?>
        

    </form>
</body>
</html>