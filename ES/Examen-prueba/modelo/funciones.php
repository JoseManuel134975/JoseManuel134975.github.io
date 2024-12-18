<?php
function guardarRespuesta($p, $r, $c){
    $f = fopen("examenes/$c/$p", "a+");

    if($f) {
        $usuario = $_SESSION['nombre'];
        fwrite($f, "$usuario:");
        fwrite($f, $r.PHP_EOL);
        fclose($f);
    }

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

function leerCuestionarios($ruta) {
    $cuestionarios = [];
    $ficheros = scandir($ruta);

    foreach($ficheros as $f) {
        if($f != "." && $f != "..") {
            array_push($cuestionarios ,$f);
        }
    }
    return $cuestionarios;
}

function leerPreguntas($cuestionario) {
    $preguntas = [];
    $ficheros = scandir('examenes/' . $cuestionario );

    foreach($ficheros as $f) {
        if($f != "." && $f != "..") {
            array_push($preguntas, $f);
        }
    }    

    return $preguntas; // Retorna la array para poder recorrerla desde FUERA!
}
?>