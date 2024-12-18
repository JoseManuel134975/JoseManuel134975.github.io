<?php if(isset($_SESSION['nombre'])): ?>
    <h4>Hola <?php echo $_SESSION['nombre'] ?></h4>
    <form action="">
        <input type="submit" name="accion" value="Cerrar">
    </form>
<?php endif ?>