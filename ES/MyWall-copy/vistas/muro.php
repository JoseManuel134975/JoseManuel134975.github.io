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
            <?php $usersDir = "./usuarios"; ?>
            <ul>
                <?php foreach (scandir($usersDir) as $subdir): ?>
                    <?php if ($subdir != "usuarios.ini" && $subdir != "." && $subdir != ".."): ?>
                        <li>
                            <a href="?usuario=<?php echo $subdir; ?>&clave=<?php echo existe($subdir); ?>&accionusuarios=Acceder">
                                <?php echo $subdir; ?>
                            </a>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </ul>
            <form action="">
                <input type="submit" name="accionmuros" value="Abrir">
            </form>

        </aside>
    </body>
</html>