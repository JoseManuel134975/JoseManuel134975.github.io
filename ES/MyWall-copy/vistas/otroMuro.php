<html>

<body>
    <h2>Tus publicaciones</h2>
    <form action="">
        <?php $cont = -2; ?>
        <?php foreach (scandir($_SESSION["ruta"] . DIRECTORY_SEPARATOR) as $archivo): ?>
            <?php
            if ($archivo != "." && $archivo != ".." && $archivo != "usuarios.ini" && !is_dir($archivo)): ?>
                <?php if ($_SESSION["usuario"] != $_SESSION["dir"]): ?>
                    <textarea disabled rows="10" cols="120" name="contenido" id=""><?php echo $contenido[$cont]; ?></textarea>
                <?php else: ?>
                    <textarea rows="10" cols="120" name="contenido" id=""><?php echo $contenido[$cont]; ?></textarea>
                <?php endif; ?>
                <?php echo "<input type='submit' name='accionmuros' value='Responder'>"; ?>
            <?php endif; ?>
            <?php $cont++; ?>
        <?php endforeach; ?>
    </form>
    <form action="">
        <input type="submit" name="accionmuros" value="Volver">
    </form>
</body>

</html>