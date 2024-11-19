<?php
if ($_REQUEST['accion']) {
    echo 'El valor seleccionado de la lista es ' . $_REQUEST['numero'] . '<br>';
    if ($_REQUEST['numeros']) {
        foreach ($_REQUEST['numeros'] as $numero) {
            echo 'Número ' . $numero . '<br>';
        }
    }
    if ($_REQUEST['textos']) {
        $file = fopen('fichero.txt', 'w');
        if ($file) {
            foreach ($_REQUEST['textos'] as $texto) {
                fwrite($file, $texto . PHP_EOL);
            }
            fclose($file);
        }
    }
}


?>

<html>

<body>
    <form action="">
        <select name="numero" id="">
            <?php for ($i = 0; $i < 10; $i++): ?>
                <option value="<?php echo $i ?>"><?php echo $i ?></option>
            <?php endfor ?>
        </select>

        <?php for ($i = 0; $i < 10; $i++): ?>
            <input type="checkbox" name="numeros[]" id="" value="<?php echo $i ?>"><?php echo $i ?>
        <?php endfor ?>
        <br>
        <?php for ($i = 0; $i < 5; $i++): ?>
            <input type="text" name="textos[]" id="">
            <br>
        <?php endfor ?>

        <?php
        if (file_exists('fichero.txt')) {
            $file = fopen('fichero.txt', 'r');
            if ($file) {
                while (!feof($file)) { // Mientras no se lea una línea fuera del fichero...
                    $linea = fgets($file); // Lee una línea del fichero
                    echo "<p>$linea</p>";
                }
                // Cerramos el fichero
                fclose($file);
            }
        }
        ?>
        <input type="submit" name="accion" value="Mostrar">
    </form>

</body>

</html>