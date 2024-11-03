<html>
    <body>
        <form class="tuMuro" action="">
            <h2>Tu próxima publicación</h2>
            <textarea name="contenido" rows="10" cols="120" id="publicar"></textarea>
            <div><input id="crearPublic" type="submit" name="accionmuros" value="Crear publicacion"></div>
        </form>

        <aside class="asideMuros">
            <h2>Muros</h2>
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
                            <a href="?dir=<?php echo $subdir; ?>">
                                <?php if ($subdir != $_SESSION["usuario"]): ?>
                                    <?php echo $subdir;  ?>
                                <?php else: ?>
                                    <?php echo "Tú" ?>
                                <?php endif; ?>
                            </a>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </ul>
            <form action="">
                <input id="verPublic" type="submit" name="accionmuros" value="Ver publicaciones">
            </form>
            <?php if (isset($_GET["dir"])): ?>
                <?php $_SESSION["dir"] = $_GET["dir"]; ?>
            <?php endif; ?>
            <p>Usuario actual: <?php echo $_SESSION["usuario"] ?></p>
            <p>Muro actual: <?php echo $_SESSION["dir"] ?></p>
        </aside>
    </body>
</html>