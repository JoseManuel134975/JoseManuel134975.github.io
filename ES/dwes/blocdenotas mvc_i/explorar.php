<?php
session_start();
$ficheros = $_SESSION["ficheros"]; 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <ul>
            <?php foreach ($ficheros as $fichero): ?>
                <?php if (!is_dir($fichero)): ?>
                    <li>
                        <?php echo $fichero; ?>
                    </li>
                <?php endif; ?>
            <?php endforeach; ?>
        </ul>
    </div>
</body>
</html>