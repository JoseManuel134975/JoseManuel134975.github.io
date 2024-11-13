<html>
    <body>
        <h2>Hola <?php echo $_SESSION["nombre"] ?></h2>
        <h2>Cuestionarios</h2>
        <?php if($_SESSION["nombre"] === "1234"): ?>
            <form action="">
                <label for="">Nombre del nuevo cuestionario</label>
                <input type="text" name="cuestionario2" id="">
                <input type="submit" name="accion" value="Crear cuestionario">
            </form>
        <?php endif ?>
        <?php foreach(scandir("." .DIRECTORY_SEPARATOR . "examenes") as $subdir): ?>
            <?php if($subdir != "." && $subdir != ".."): ?>
                <form action="">
                    <label for=""><?php echo $subdir ?></label>
                    <input type="hidden" name="cuestionario" value="<?php echo $subdir ?>">
                    <input type="submit" name="accion" value="Responder cuestionario">
                    <br>
                <?php if($_SESSION["nombre"] === "1234"): ?>
                    <input type="submit" name="accion" value="Agregar preguntas">
                    <input type="submit" name="accion" value="Ver todas las respuestas">
                    <br>
                </form>
                <?php else: ?>
                </form>
                <?php endif ?>
            <?php endif ?>
        <?php endforeach ?>
    </body>
</html>