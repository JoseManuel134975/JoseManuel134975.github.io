<?php

/* guarda en un fichero de nombre nombre_fichero el contenido 
que se le pasa como parámetro */

function guardar($nombre_fichero, $contenido)
{
    if(file_exists($nombre_fichero)){
        $ok = file_put_contents($nombre_fichero, $contenido, FILE_APPEND);
    }else{
        $ok = file_put_contents($nombre_fichero, $contenido);
    }
    return $ok;
}

function abrir($nombre_dir){
    $array = [];

    echo "<h2>Tus publicaciones</h2>";
    echo "<form action=''>";
    if (file_exists($nombre_dir)) {
        foreach (scandir($nombre_dir) as $archivo) {
            if ($archivo != "." && $archivo != ".." && $archivo != "usuarios.ini" && !is_dir($archivo)) {
                $contenido = file_get_contents($nombre_dir . DIRECTORY_SEPARATOR . $archivo);
                array_push($array, $contenido);
                echo "<textarea rows='10' cols='120' name=" . $contenido . ">" . $contenido . "</textarea>";
                echo "<input type='submit' name='accionmuros' value='Responder'>";
            }
        }
        echo "</form>";
        return $array;
    }else{
        return false;
    }
}

function mostrarPublicaciones () {
    
}

/* Función 'existe' que recibe el nombre de un usuario y devuelve:

a) La contraseña del usuario si éste existe

 b) NULL si el usuario no existe */

function existe($usuario)
{

    // Partimos de la hipótesis de que el usuario no va a existir

    $ok = NULL;

    // Cargamos en un array asociativo el fichero de usuarios

    $usuarios = parse_ini_file("./usuarios/usuarios.ini");

    // Preguntamos si existe la el usuario $usuario dentro del array

    if (isset($usuarios[$usuario])) {

        // Si existe guardamos su contraseña para devolverla

        $ok = $usuarios[$usuario];
    }

    return $ok;
}

// Función 'acceder' que devuelve true si el usuario existe y coincide su contraseña o false en caso contrario

function acceder($usuario, $clave)
{

    // Partimos de la hipótesis de que el usuario no existe

    $ok = false;

    // Llamamos a la función existe para recoger la contraseña del usuario si existe 

    // o NULL en caso contrario

    $clave_usuario = existe($usuario);

    // Si es distinto de NULL comparamos con la clave introducida en el formulario

    if ($clave_usuario != NULL && $clave_usuario == $clave) {

        // Si coinciden, devolveremos true como valor indicativo de acceso autorizado 

        $ok = true;
    }

    return $ok;
}

// Función que graba un usuario y su clave en el fichero de usuarios

function grabar($usuario, $clave)
{

    // Pensamos que algo puede fallar

    $ok = false;

    // Abrimos el fichero en modo de añadir "a+" Ver los diferentes modos de apertura: 
    // https://www.php.net/manual/es/function.fopen.php
    // Abrimos el fichero y obtenemos un descriptor de fichero a través del cual realizar las operaciones de lectura, escritura, cierre, etc

    $f = fopen("./usuarios/usuarios.ini", "a+");

    // si se ha podido abrir ....

    if ($f != NULL) {

        // Grabamos la línea

        $ok = fwrite($f, "$usuario=$clave" . PHP_EOL); // ok tomará el valor false si no se ha podido grabar

        // Cerramos el fichero 

        fclose($f);
    }

    return $ok;
}

// Función 'registrar' que comprueba que el usuario no existe para después añadirlo 
// al fichero de usuarios y crear su directorio de trabajo
// Devuelve true si se ha podido registrar y false en caso contrario 

function registrar($usuario, $clave)
{

    // Pensamos que no se va a poder registrar

    $ok = false;

    // Preguntamos si existe, nos devuelve NULL si el usuario no existe

    if (existe($usuario) == NULL) { // se podría expresar if (!existe($usuario)) { .....

        $ok = grabar($usuario, $clave);

        // Si se ha podido grabar 

        if ($ok != false) {

            // Creamos la carpeta con el nombre de usuario

            $ok = mkdir("./usuarios/".$usuario);

            // Si todo ha ido bien $ok tendrá el valor true

        }
    }

    return $ok;
}

