<?php
function guardar($nombre_fichero, $contenido){
    if(file_exists($nombre_fichero)){
        $ok = file_put_contents($nombre_fichero, $contenido, FILE_APPEND);
    }else{
        $ok = file_put_contents($nombre_fichero, $contenido);
    }
    return $ok;
}

function abrir($nombre_dir, $guardaContenido){
    if (file_exists($nombre_dir)) {
        foreach (scandir($nombre_dir) as $archivo) {
            if ($archivo != "img" && $archivo != "." && $archivo != ".." && $archivo != "usuarios.ini" && !is_dir($archivo)) {
                $contenido = file_get_contents($nombre_dir . DIRECTORY_SEPARATOR . $archivo);
                array_push($guardaContenido, $contenido);
            }
        }
        return $guardaContenido;
    }else{
        return false;
    }
}

function guardarRespuestas ($array, $contenido) {
    return array_push($array, $contenido);
}

function existe($usuario){
    $ok = NULL;
    $usuarios = parse_ini_file("./usuarios/usuarios.ini");

    if (isset($usuarios[$usuario])) {
        $ok = $usuarios[$usuario];
    }

    return $ok;
}

function acceder($usuario, $clave){
    $ok = false;
    $clave_usuario = existe($usuario);

    if ($clave_usuario != NULL && $clave_usuario == $clave) {
        $ok = true;
    }

    return $ok;
}

function grabar($usuario, $clave){
    $ok = false;
    $f = fopen("./usuarios/usuarios.ini", "a+");

    if ($f != NULL) {
        $ok = fwrite($f, "$usuario=$clave" . PHP_EOL);
        fclose($f);
    }

    return $ok;
}

function registrar($usuario, $clave){
    $ok = false;

    if (existe($usuario) == NULL) {
        $ok = grabar($usuario, $clave);

        if ($ok != false) {
            $ok = mkdir("./usuarios/".$usuario);
        }
    }

    return $ok;
}