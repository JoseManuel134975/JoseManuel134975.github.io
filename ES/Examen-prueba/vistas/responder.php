<html>
    <body>
        <h2>Estudiante: <?php echo $_SESSION["nombre"] ?></h2>
        <h2>Cuestionario de <?php echo $_SESSION["cuestionario"] ?></h2>
        <p><?php echo $_GET["pregunta"] ?></p>
        <form action="">
            <textarea cols="60" rows="10" name="respuesta" id=""></textarea>
            <div></div>
            <input type="submit" name="accion" value="Guardar respuesta">
        </form>
    </body>
</html>