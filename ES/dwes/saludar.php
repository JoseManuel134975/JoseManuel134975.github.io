<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludando</title>
</head>
<body>
    <?php
        $nombre = $_REQUEST['name'];
        $dni = $_REQUEST['dni'];

        echo "Hola $nombre";
        echo ", tu dni es $dni";
    ?>
</body>
</html>