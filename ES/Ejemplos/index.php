<?php

if (isset($_REQUEST["accion"])) {
    $numero = $_REQUEST["numero"];
    echo "El numero seleccionado en la lista es $numero </br>";
    if (isset($_REQUEST["casilla"])) {
        $casilla = $_REQUEST["casilla"];
        echo "Los valores seleccionados de las casillas checkbox son: ";
        print_r($casilla);
    }

    if (isset($_REQUEST["dato"])) {
        $dato = $_REQUEST["dato"];
        echo "Los datos escritos por el usuario son: ";
        print_r($dato);

        $file = fopen($file, "w");
        if ($file != NULL){
            foreach ($dato as $linea){
                fwrite($file, $linea, PHP_EOL);
            }
            fclose($file);    
        }
    }
}

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bucles</title>
</head>

<body>
    <form>
        <label for="numero">Selecciona un número</label>
        <!-- Generamos 100 listas de numeros -->
        <select name="numero">
            <?php
            for ($i = 0; $i < 100; $i++): ?>
                <option value="<?php echo $i ?>"><?php echo $i ?></option>
            <?php endfor ?>
        </select>
        <!-- Generamos 10 casillas -->
        <?php
        for ($n = 0; $n < 10; $n++): ?>
            <br><input type="checkbox" name="casilla[]" id="<?php echo $n ?>" value="<?php echo $n ?>">
            <label for="<?php echo $n ?>"><?php echo $n ?></label><br>
        <?php endfor ?>
        
        <!-- Generamos 100 inputs -->
            <?php for ($i = 0; $i < 10; $i++): ?>
                <br>
                <label for="">Campo <?php echo $i ?></label><input type="text" name="dato[]">
            <?php endfor; ?>

        <br>
        <input type="submit" name="accion" value="Mostrar">
    </form>
</body>

</html>