<html>

<body>
    <h2>Tus publicaciones</h2>
    <section class="otroMuro">
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
                    <input type="submit" name="accionmuros" value="Responder">
                <?php endif; ?>
                <?php $cont++; ?>
            <?php endforeach; ?>
        </form>
    </section>
    <h2>Respuestas</h2>
    <section class="respuestas">
        <!-- Mostrar respuestas si existen -->
        <?php if (isset($_SESSION['respuestas'][$cont])): ?>
            <?php foreach ($_SESSION['respuestas'][$cont] as $respuesta): ?>
                <textarea disabled rows="10" cols="120"><?php echo $respuesta; ?></textarea>
            <?php endforeach; ?>
        <?php endif; ?>
    </section>
    <form action="">
        <input type="submit" name="accionmuros" value="Volver">
    </form>
</body>

</html>