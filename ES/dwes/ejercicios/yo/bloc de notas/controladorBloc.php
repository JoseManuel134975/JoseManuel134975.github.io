<?php
session_start();
/* Si no existe la variable de sesión usuario, es porque la identificación no se 
 ha producido correctamente redirigimos a la página principal */
if (!isset($_SESSION["usuario"])) {
    header("Location:index.php");
}


// Incluimos el fichero con las funciones abrir, guardar, etc..
require_once('funciones.php');
// Inicializamos las variables
$contenido = "";
$nombre_fichero = "";
// Si hemos recibido el botón ....
if (isset($_REQUEST["accion"])) {
    // Convertimos a minúscula y eliminamos los espacios en blanco y 
    $accion = str_replace(" ","", strtolower($_REQUEST["accion"]));
    // Recogemos el nombre del fichero y el contenido
    $nombre_fichero = $_REQUEST["nombre_fichero"];
    $contenido = $_REQUEST["contenido"];
    // Preguntamos por el botón que hemos pulsado    
    switch ($accion) {

        case "guardar": // Construimos la ruta y el nombre de fichero 
                        $ruta = $_SESSION["usuario"].DIRECTORY_SEPARATOR.$nombre_fichero;
                        $ok = guardar($ruta, $contenido); 
                        if ($ok == false) {
                            $mensaje = "No se ha podido guardar el fichero $ruta";
                        }else{
                            $mensaje = "El fichero $ruta se ha guardado correctamente";
                        }
                        break;

        case "abrir":   // Construimos la ruta y el nombre de fichero 
                        $ruta = $_SESSION["usuario"].DIRECTORY_SEPARATOR.$nombre_fichero;
                        $contenido = abrir($ruta);
                        if (!$contenido) {
                            $mensaje = "No se ha podido abrir el archivo $ruta";
                        }
                        break; 
        
    }
}
?>