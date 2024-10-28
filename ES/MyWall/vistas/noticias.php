<html>

<body>
    <form action="">
        <input type="submit" name="accionusuarios" value="Cerrar sesion">
    </form>
    <form action="">
        <div><textarea name="contenido" rows="10" cols="120" id=""><?php if (isset($contenido)) echo $contenido; ?></textarea></div>
        <input type="submit" name="accionnoticia" value="Crear noticia">
    </form>

    <aside>
        <!-- <form>
            <input type="submit" value="volver" />
        </form> -->
        <ul>
            <?php $dir = "./usuarios"; echo $_SESSION["clave"];?>
            <?php foreach (scandir($dir) as $subdir): ?>
                <?php if ($subdir != "usuarios.ini" && $subdir != "." && $subdir != ".."): ?>
                    <li>
                        <a href="?usuario=<?php echo $subdir; ?>&clave=<?php existe($_SESSION["clave"]); ?>&accionusuarios=Acceder">
                            <?php echo $subdir; ?>
                        </a>
                        <form action="">
                            <input type="hidden" name="nombre_subdir" value="<?php echo $subdir ?>" />
                            <input type="submit" name="accionbloc" value="Abrir" />
                        </form>
                    </li>
                    <ul>
                            <?php foreach (scandir($dir . "/" . $subdir) as $fichero): ?>
                                <?php if (!is_dir($fichero) && $fichero != "." && $fichero != ".." && $fichero != "usuarios.ini"): ?>
                                    <li>
                                        <a href="?accionnoticia=abrir&nombre_subdir=<?php echo $subdir; ?>&nombre_fichero=<?php echo $fichero; ?>">
                                            <?php echo $fichero; ?>
                                        </a>
                                    </li>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </ul>
                <?php endif; ?>
            <?php endforeach; ?>
        </ul>


    </aside>

</body>

</html>