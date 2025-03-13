<?php
// Intentamos recuperar la sesión y si no existiera se crea
session_start();

// Preguntamos por la existencia de la variable de sesión 'memoria'
if (!isset($_SESSION["memoria"])) {
    // si no existe la creamos
    $_SESSION["memoria"] = array();
}

/* Inicializamos las variables temporales dond erecoger los valores 
para después escribirlos */

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
        case "M": array_push($_SESSION["memoria"], $resultado); break;
        case 'R': // var_dump($_SESSION["memoria"]);
                $resultado = array_pop($_SESSION["memoria"]); 
                break; 
        default: $resultado = "Operación no permitida";
    }  
    
}

?>