<html>
    <body>
        <form action="">
            <input type="submit" name="accionusuarios" value="Cerrar sesion">
        </form>
        <h2>Tu próxima publicación</h2>
        <form action="">
            <textarea name="contenido" rows="10" cols="120" id="publicar"></textarea>
            <div><input type="submit" name="accionmuros" value="Crear publicacion"></div>
        </form>

        <aside>
            <h2>Usuarios</h2>
            <?php $usersDir = "./usuarios"; $cont = 0; ?>
            <ul>
                <?php foreach (scandir($usersDir) as $subdir): ?>
                    <?php if ($subdir != "usuarios.ini" && $subdir != "." && $subdir != ".."): ?>
                        <li>
                            <a href="?usuario=<?php echo $subdir; ?>&clave=<?php echo existe($subdir); ?>&dir=<?php echo $subdir; ?>">
                                <?php echo $subdir;  ?>
                            </a>
                        </li>
                        <?php $cont++; ?>
                    <?php endif; ?>
                <?php endforeach; ?>
            </ul>
            <form action="">
                <input type="submit" name="accionmuros" value="Ver publicaciones">
            </form>
            <?php echo $_SESSION["usuario"]; echo $_SESSION["dir"]?>
        </aside>
    </body>
</html>