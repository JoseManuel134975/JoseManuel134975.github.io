<table>
    <?php foreach($cuestionarios as $cuestion): ?>
        <tr>
            <td><?php echo $cuestion ?></td>
            <td>
                <form>
                    <input type="submit" name="accion" value="Responder">
                </form>
            </td>
        </tr>
    <?php endforeach ?>
</table>