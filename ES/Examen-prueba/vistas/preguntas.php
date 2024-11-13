<html>
    <body>
        <h2>Estudiante: <?php echo $_SESSION["nombre"] ?></h2>
        <h2>Cuestionario de <?php echo $_SESSION["cuestionario"] ?></h2>
        <?php foreach(scandir("." . DIRECTORY_SEPARATOR . "examenes" . DIRECTORY_SEPARATOR . $_SESSION["cuestionario"]) as $pregunta): ?>
            <?php if($pregunta != "." && $pregunta != ".."): ?>
                <p><?php echo $pregunta ?> <a href="?accion=contestarpregunta&pregunta=<?php echo $pregunta ?>">Contestar</a></p>
            <?php endif ?>
        <?php endforeach ?>
    </body>
</html>