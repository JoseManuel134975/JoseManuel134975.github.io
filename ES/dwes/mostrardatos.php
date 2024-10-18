<?php 
    session_start();
    $nombre = $_SESSION['name'];
    $apellidos = $_SESSION['surname'];

    echo "Hola $nombre $apellidos";
?>