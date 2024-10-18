<?php
    $op1 = 0;
    $op2 = 0;
    $result = 0;

    if (isset($_REQUEST['sumar']) || isset($_REQUEST['restar']) || isset($_REQUEST['multiplicar']) || isset($_REQUEST['dividir'])) {
        $result = $_REQUEST['result'];
        $op1 = $_REQUEST['op1'];
        $op2 = $_REQUEST['op2'];
    }
?>

<?php
        switch ($result) {
            case isset($_REQUEST['sumar']):
                $result = $op1 + $op2;
                break;
            case isset($_REQUEST['restar']):
                $result = $op1 - $op2;
                break;
            case isset($_REQUEST['multiplicar']):
                $result = $op1 * $op2;
                break;
            case isset($_REQUEST['dividir']):
                try {
                    $result = $op1 / $op2;
                } catch (DivisionByZeroError $e) {
                    $result = "Division por cero";
                }
                break;
            default:
                $result = "Operacion no permitida";
        }
?>