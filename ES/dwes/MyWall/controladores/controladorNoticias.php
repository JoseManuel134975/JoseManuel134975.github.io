<?php
// Inicializamos las variables
$contenido = "";
$nombre_fichero = "";
// Si hemos recibido el botón ....
if (isset($_REQUEST["accionnoticia"])) {
    // Convertimos a minúscula y eliminamos los espacios en blanco y 
    $accion = str_replace(" ","", strtolower($_REQUEST["accionnoticia"]));
    // Preguntamos por el botón que hemos pulsado    
    switch ($accion) {

        case "crearnoticia": // Construimos la ruta y el nombre de fichero 
                        $path = "./usuarios/" . $_SESSION["usuario"] . "/".time() . ".txt";
                        // Guardamos el contenido en el fichero que indique $path
                        $ok = guardar($path, $_REQUEST["contenido"]); 
                        // comprobamos si hemos podido guardar y emitimos el mensaje correspondiente
                        if ($ok == false) {
                            $mensaje = "No se ha podido guardar el fichero $path";
                        }else{
                            $mensaje = "El fichero $path se ha guardado correctamente";
                        }
                        /* Recuperamos el contenido y el nombre del fichero para volver a mostrarlo, 
                        que no se pierda y recuperar el estado de la aplicación */ 
                        $contenido = $_REQUEST["contenido"];
                        // Establecemos la vista adecuada
                        $vista = "noticias.php";
                        break;

        case "abrir":   // Construimos la ruta y el nombre de fichero 
                        $path = $_SESSION["usuario"].DIRECTORY_SEPARATOR;   
                        // Intentamos leer el archivo
                        $contenido = abrir($path);
                        // Comprobamos si hemos podido leer o no
                        if (!$contenido) {
                            // Dejamos un mensaje de aviso
                            $mensaje = "No se ha podido abrir el archivo $path";
                        }
                        /* Establecemos el nombre del fichero para que no se pierda y conservar el 
                        estado de la aplicación */
                        $nombre_fichero = time() . ".txt";
                        // De cualquier forma volvemos a mostrar el bloc de notas
                        $vista = "noticias.php";
                        break; 

        case "explorar": // Establecemos la ruta del usuario para leer el directorio 
                        $path = $_SESSION["usuario"];
                        // Leeemos el directorio
                        $ficheros = scandir($path);
                        // Y mostramos la vista donde aparecerá los ficheros y las carpetas del usuario
                        $vista = "explorar.php";
                        break;
        
        case "imprimirenpdf":  /* Recuperamos el nombre del fichero del que 
                                queremos generar un pdf */
                            $fichero = $_REQUEST["nombre_fichero"];
                            // Llamamos a la función que generará el pdf
                            imprimirPDF($fichero);
                            break;

        case "descargar": /* Recuperamos el nombre del fichero que queremos descargar  */
                            descargar($_REQUEST["nombre_fichero"]);
                            break;

        
    }
}

?>