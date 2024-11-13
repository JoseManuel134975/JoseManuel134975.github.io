<html>
    <body>
        <?php foreach($_SESSION["titulos"] as $pregunta): ?>
            <h2><?php echo $pregunta ?></h2>
            <?php foreach($_SESSION["respuestas"] as $texto): ?>
                <p><?php echo $texto ?></p>
            <?php endforeach ?>
        <?php endforeach ?>
    </body>
</html>