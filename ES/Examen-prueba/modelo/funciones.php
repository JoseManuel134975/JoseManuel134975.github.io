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
    $respuestas = [];
    $titulos = [];
    $texto = "";
    $ok = false;

    foreach(scandir($ruta) as $pregunta){
        if($pregunta != "." && $pregunta != ".." && !is_dir($pregunta)){
            array_push($titulos, $pregunta);
            $texto = file_get_contents($ruta . DIRECTORY_SEPARATOR . $pregunta);
            if($texto != ""){
                array_push($respuestas, $texto);
            }
        }
    }

    if(count($respuestas) > 0){
        $_SESSION["respuestas"] = $respuestas;
        $_SESSION["titulos"] = $titulos;
        $ok = true;
    }else{
        $ok = false;
    }

    return $ok;
}
?>