<?php

$resultado = "";
$operando1 = "";
$operando2 = "";

// Preguntamos si hemos recibido el formulario
if (isset($_REQUEST["accion"]) == true ) {
    $accion = $_REQUEST["accion"];
    $operando1 = (int) $_REQUEST["operando1"];
    $operando2 = (int) $_REQUEST["operando2"];
    // Recupero el resultado por si quiero guardar el resultado en memoria
    $resultado = (int) $_REQUEST["resultado"];
    // Recupero el campo oculto memoria para mantenerlo de un submit a otro
    $memoria = (int) $_REQUEST["memoria"];
    switch ($accion) {
        case "+": $resultado = $operando1 + $operando2; break;
        case "-": $resultado = $operando1 - $operando2; break;
        case "*": $resultado = $operando1 * $operando2; break;
        case "/":   try {
                        $resultado = $operando1 / $operando2; 
                    }catch (DivisionByZeroError $e) {
                        $resultado = "División por cero ";
                    }       
                    break;
        case "M": $memoria = $resultado; break;
        case "R": $resultado = $memoria; break;
        default: $resultado = "Operación no permitida";
    }  
    
}

?>