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
            <?php foreach (scandir($usersDir) as $subdir): ?>
                <?php if ($subdir = $_SESSION["usuario"]): ?>
                    <?php $_SESSION["dir"] = $subdir; ?>
                <?php endif; ?>
            <?php endforeach; ?>

                <ul>
                <?php foreach (scandir($usersDir) as $subdir): ?>
                    <?php if ($subdir != "usuarios.ini" && $subdir != "." && $subdir != ".."): ?>
                        <li>
                            <a href="?usuario=<?php echo $subdir; ?>&clave=<?php echo existe($subdir); ?>&dir=<?php echo $subdir; ?>">
                                <?php echo $subdir;  ?>
                            </a>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </ul>
            <form action="">
                <input type="submit" name="accionmuros" value="Ver publicaciones">
            </form>
            <?php if (isset($_GET["dir"])): ?>
                <?php $_SESSION["dir"] = $_GET["dir"]; ?>
            <?php endif; ?>
            <p>Usuario actual: <?php echo $_SESSION["usuario"] ?></p>
            <p>Muro actual (pulsa en el botón de arriba para mostrarlo): <?php echo $_SESSION["dir"] ?></p>
        </aside>
    </body>
</html>