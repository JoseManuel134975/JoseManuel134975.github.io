<?php
$contenido = "";
$nombre_fichero = "";

if (isset($_REQUEST["accionmuros"])) {
    $accion = str_replace(" ", "", strtolower($_REQUEST["accionmuros"]));

    switch ($accion) {
        case "crearpublicacion":
            $path = "./usuarios" . DIRECTORY_SEPARATOR . $_SESSION["usuario"] . "/" . time() . ".txt";
            $ok = guardar($path, $_REQUEST["contenido"]);

            if (isset($_FILES["subirImagen"])) {
                $img = $_FILES["subirImagen"]["tmp_name"];
                $imgName = $_FILES["subirImagen"]["name"];
                $pathImg = "./usuarios" . DIRECTORY_SEPARATOR . $_SESSION["usuario"] . DIRECTORY_SEPARATOR . "img";
            
                // Verifica y crea el directorio si no existe
                if (!is_dir($pathImg)) {
                    mkdir($pathImg, 0755, true);
                }
            
                // Mueve el archivo subido
                if (move_uploaded_file($img, $pathImg . "/" . $imgName)) {
                    echo "La imagen se ha subido exitosamente.";
                } else {
                    echo "Error al subir la imagen.";
                }
            }
            
            if ($ok == false) {
                $mensaje = "No se ha podido guardar el fichero $path";
            } else {
                $mensaje = "El fichero $path se ha guardado correctamente";
            }

            $contenido = $_REQUEST["contenido"];
            $vista = "muro.php";
            break;
        case "verpublicaciones":
            $path = "./usuarios" . DIRECTORY_SEPARATOR . $_SESSION["dir"];
            $_SESSION["ruta"] = $path;
            $array = [];
            $contenido = abrir($path, $array);

            if (!$contenido) {
                $mensaje = "No se ha podido abrir el archivo $path";
            }

            $vista = "otroMuro.php";
            break;
        case "responder":
            if (empty($_REQUEST["comentario"])) {
                $mensaje = "La respuesta está en blanco";
            }

            $publicacionId = $_REQUEST["publicacion_id"]; // Captura el ID de la publicación
            $comentario = $_REQUEST["comentario"];

            if (!isset($_SESSION["respuestas"])) {
                $_SESSION["respuestas"] = array(); // Inicializar si no existe
            }

            $_SESSION["respuestas"][$publicacionId][] = $comentario;
            $vista = "muro.php";
            break;
        default:
            $vista = "muro.php";
            break;
    }
}