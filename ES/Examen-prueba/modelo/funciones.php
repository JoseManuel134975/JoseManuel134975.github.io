<?php
function guardarRespuesta($pregunta, $respuesta){
    $ruta = "." . DIRECTORY_SEPARATOR . "examenes" . DIRECTORY_SEPARATOR . $_SESSION["cuestionario"] . DIRECTORY_SEPARATOR . $pregunta;
    $ok = false;
    $ok = file_put_contents($ruta, $_SESSION["nombre"] . ": " . $respuesta);

    return $ok;
}

function guardarCuestionario($cuestionario){
    $ruta = "." . DIRECTORY_SEPARATOR . "examenes" . DIRECTORY_SEPARATOR;
    $ok = false;
    $ok = mkdir($ruta . $cuestionario);
}

function guardarPregunta($pregunta){
    $ruta = "." . DIRECTORY_SEPARATOR . "examenes" . DIRECTORY_SEPARATOR . $_SESSION["cuestionario"] . DIRECTORY_SEPARATOR;
    $ok = false;
    $ok = touch($ruta . $pregunta);

    return $ok;
}

function verRespuestas(){
    $ruta = "." . DIRECTORY_SEPARATOR . "examenes" . DIRECTORY_SEPARATOR . $_SESSION["cuestionario"];
    $ok = false;

    foreach(scandir($ruta) as $pregunta){
        if($pregunta != "." && $pregunta != ".." && !is_dir($pregunta)){
            $f = fopen($ruta . DIRECTORY_SEPARATOR . $pregunta, 'r');
            echo '<h2>' . $pregunta . '</h2>';
            if($f){
                while(!feof($f)){
                    $linea = fgets($f);
                    echo '<p>' . $linea . '</p>';
                }
            }
        }
    }

    if(fclose($f)){
        $ok = true;
    }

    return $ok;
}
?>