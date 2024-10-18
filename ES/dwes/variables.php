<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        // Le asigno a "basura" un valor numérico
        $basura = 34;
    ?>

    <p>
        <?php
            // Muestro el contenido de "basura"
            echo "El valor de la variable basura es " . $basura; // Operador de concatenación -> . (forma clásica)
        ?>
    </p>
    
    <p>
        <?php
            echo "El valor de la variable basura es $basura"; // Forma moderna
        ?>
    </p>

    <p>
        <?php
            $basura = true;
            echo "El valor de la variable basura es $basura";
        ?>
    </p>

    <p>
        <?php
            $basura = "Hola";
            echo "El valor de la variable basura es '$basura'";
        ?>
    </p>

    <p>
        <?php
            $basura = array("Volvo","BMW","Toyota");
            var_dump($basura); // Muestra el contenido de la variable a modo de depuración
        ?>
    </p>

    <?php
        // Creo una array con 3 valores de distinto tipo
        $basura = array(34, true, "Cadena de texto");
        // Recorremos el array elemento a elemento y mostramos su valor
        foreach ($basura as $value) {
            echo $value . "<br>";
        }
    ?>

    <!-- Otra forma de hacerlo (más liosa que la de arriba)-->
    <h2>Mostrando el contenido del array "basura"</h2>
    <?php foreach ($basura as $value) : ?>
        <p><?php echo $value; ?></p>
    <?php endforeach; ?>
</body>
</html>