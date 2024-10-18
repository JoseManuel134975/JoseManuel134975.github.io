<?php
require_once("operar.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
</head>
<body>    
    <form action="">
        <div>
            <label for="operando1">Operando 1</label>
            <input type="text" 
                    id="operando1" 
                    name="operando1" 
                    placeholder="0"
                    value="<?php echo $operando1; ?>"/>
        </div>
        <div>
            <label for="operando2">Operando 2</label>
            <input type="text" 
                    id="operando2" 
                    name="operando2" 
                    placeholder="0"
                    value = "<?php echo $operando2; ?>" />
        </div>
        <div>            
            <input type="submit" value="+" name="accion"/>     
            <input type="submit" value="-" name="accion"/>     
            <input type="submit" value="*" name="accion"/>     
            <input type="submit" value="/" name="accion"/> 
            <!-- guarda el último resultado -->
            <input type="submit" value="M" name="accion"/> 
            <!-- recupera el último resultado guardado-->
            <input type="submit" value="R" name="accion"/> 
        </div>
        <div>
            <label for="resultado">Resultado</label>
            <input type="text" 
                    id="resultado" 
                    name="resultado"
                    value="<?php echo $resultado; ?>"/>
            <input type="hidden" name="memoria" value ="<?php echo $memoria ?>"/>
        </div>
        <div>
            <input type="submit" id="btn0" value="0">
            <input type="submit" id="btn1" value="1">
            <input type="submit" id="btn2" value="2">
            <input type="submit" id="btn3" value="3">
            <input type="submit" id="btn4" value="4">
            <input type="submit" id="btn5" value="5">
            <input type="submit" id="btn6" value="6">
            <input type="submit" id="btn7" value="7">
            <input type="submit" id="btn8" value="8">
            <input type="submit" id="btn9" value="9">
        </div>
    </form>
</body>
</html>