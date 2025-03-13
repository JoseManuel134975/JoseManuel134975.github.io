<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio</title>
</head>

<body>
    <form action="#" method="get">
        <div>
            <label for="op1">Operando 1</label>
            <input type="number" name="op1" id="op1" value="<?php echo $op1; ?>">
        </div>
        <div>
            <label for="op2">Operando 2</label>
            <input type="number" name="op2" id="op2" value="<?php echo $op2; ?>">
        </div>
        <div>
            <input type="submit" value="+" name="sumar">
            <input type="submit" value="-" name="restar">
            <input type="submit" value="*" name="multiplicar">
            <input type="submit" value="/" name="dividir">
        </div>
        <div>
            <label for="result">Resultado</label>
            <input readonly type="number" name="result" id="result" value="<?php echo $result; ?>">
        </div>
    </form>
</body>

</html>