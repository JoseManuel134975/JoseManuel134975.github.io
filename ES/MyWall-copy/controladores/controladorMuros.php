<?php
// Inicializamos las variables
$contenido = "";
$nombre_fichero = "";
// Si hemos recibido el botón ....
if (isset($_REQUEST["accionmuros"])) {
    // Convertimos a minúscula y eliminamos los espacios en blanco y 
    $accion = str_replace(" ", "", strtolower($_REQUEST["accionmuros"]));
    // Preguntamos por el botón que hemos pulsado    
    switch ($accion) {
        case "crearpublicacion": // Construimos la ruta y el nombre de fichero 
            $path = "./usuarios" . DIRECTORY_SEPARATOR . $_SESSION["usuario"] . "/".time() . ".txt";
            // Guardamos el contenido en el fichero que indique $path
            $ok = guardar($path, $_REQUEST["contenido"]);
            // comprobamos si hemos podido guardar y emitimos el mensaje correspondiente
            if ($ok == false) {
                $mensaje = "No se ha podido guardar el fichero $path";
            } else {
                $mensaje = "El fichero $path se ha guardado correctamente";
            }
            /* Recuperamos el contenido y el nombre del fichero para volver a mostrarlo, 
                        que no se pierda y recuperar el estado de la aplicación */
            $contenido = $_REQUEST["contenido"];
            // Establecemos la vista adecuada
            $vista = "muro.php";
            break;
        case "verpublicaciones":   // Construimos la ruta y el nombre de fichero 
            $path = "./usuarios" . DIRECTORY_SEPARATOR . $_SESSION["dir"];
            $_SESSION["ruta"] = $path;
            $array = [];
            // Intentamos leer el archivo
            $contenido = abrir($path, $array);
            // Comprobamos si hemos podido leer o no
            if (!$contenido) {
                // Dejamos un mensaje de aviso
                $mensaje = "No se ha podido abrir el archivo $path";
            }
            // De cualquier forma volvemos a mostrar el bloc de notas
            $vista = "otroMuro.php";
            break;
        case "volver":
            $vista = "muro.php";
            break;
        case "responder":
            $vista = "responder.php";
            break;
        case "publicar":

            break;
        case "explorar": // Establecemos la ruta del usuario para leer el directorio 
            $path = $_SESSION["usuario"];
            // Leeemos el directorio
            $ficheros = scandir($path);
            // Y mostramos la vista donde aparecerá los ficheros y las carpetas del usuario
            $vista = "explorar.php";
            break;
    }
}
