<html>

<body>
    <section class="otroMuro">
        <h2>Publicaciones</h2>
        <form action="">
            <?php $cont = -2; ?>
            <?php foreach (scandir($_SESSION["ruta"] . DIRECTORY_SEPARATOR) as $archivo): ?>
                <?php
                if ($archivo != "." && $archivo != ".." && $archivo != "usuarios.ini" && !is_dir($archivo)): ?>
                    <?php if ($_SESSION["usuario"] != $_SESSION["dir"]): ?>
                        <textarea disabled rows="10" cols="120" name="contenido"><?php echo $contenido[$cont]; ?></textarea>
                    <?php else: ?>
                        <textarea rows="10" cols="120" name="contenido"><?php echo $contenido[$cont]; ?></textarea>
                    <?php endif; ?>
                    <input type="hidden" name="publicacion_id" value="<?php echo $cont; ?>">
                    <input type="text" name="comentario" value="">
                    <input type="submit" id="respuesta" name="accionmuros" value="Responder">

                    <article class="respuestas">
                        <?php if (isset($_SESSION["respuestas"])): ?>
                            <?php foreach ($_SESSION["respuestas"] as $array): ?>
                                <?php foreach ($array as $respuesta): ?>
                                    <?php echo $respuesta ?>
                                    <br>
                                <?php endforeach ?>
                            <?php endforeach ?>
                        <?php endif ?>
                        <?php if (isset($_REQUEST["subirImagen"])): ?>
                            <img src="" alt="">
                        <?php endif; ?>
                    </article>
                <?php endif; ?>
                <?php $cont++; ?>
            <?php endforeach; ?>
        </form>
    </section>
    <form id="volver" action="">
        <input type="submit" name="accionmuros" value="Volver">
    </form>
</body>

</html>