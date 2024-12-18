<html>
    <body>
        <table>
            <?php foreach($preguntas as $p): ?>
                <tr>
                    <td><?php echo $p ?></td>
                    <td><a href="?accion=contestarpregunta&pregunta=<?php echo $p ?>">Contestar</a></td>
                </tr>
            <?php endforeach ?>
    
        </table>
    </body>
</html>