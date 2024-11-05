<?php
if (isset($_REQUEST["accionusuarios"])) {
    $accion = str_replace(" ", "", strtolower($_REQUEST["accionusuarios"]));

    switch ($accion) {
        case "acceder":
            $ok = acceder($_REQUEST["usuario"], $_REQUEST["clave"]);

            if ($ok == true) {
                $_SESSION["usuario"] = $_REQUEST["usuario"];
                $_SESSION["clave"] = $_REQUEST["clave"];
                $vista = "muro.php";
            } else {
                $mensaje = "Usuario incorrecto";
                $vista = "identificacion.php";
            }
            break;
        case "registrarme":
            $ok = registrar($_REQUEST["usuario"],  $_REQUEST["clave"]);

            if ($ok) {
                $mensaje = "Usuario registrado";
            } else {
                $mensaje = "Error: el usuario no se ha podido registrar";
            }
            $vista = "identificacion.php";
            break;
        case "cerrarsesion":
            session_unset();
            session_destroy();
            
            $vista = "identificacion.php";
            break;
    }
}
