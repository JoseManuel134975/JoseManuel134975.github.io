<table>
    <?php foreach($cuestionarios as $cuestion): ?>
        <tr>
            <td><?php echo $cuestion ?></td>
            <td>
                <form>
                    <input type="submit" name="accion" value="Responder cuestionario">
                    <input type="hidden" name="cuestionario" value="<?php echo $cuestion ?>">
                </form>
            </td>
        </tr>
    <?php endforeach ?>
</table>