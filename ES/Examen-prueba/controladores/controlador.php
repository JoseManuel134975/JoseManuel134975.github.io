<?php 
if(isset($_REQUEST["accion"])){
    $accion = str_replace(" ", "", strtolower($_REQUEST["accion"]));

    switch($accion){
        case "acceder":
            $nombre = $_REQUEST["nombre"];
            $_SESSION["nombre"] = $nombre;
            $cuestionarios = leerCuestionarios('examenes'); // Al igual que en Symfony, se le pasa al .php (.html.twig) la variable
            $vista = "cuestionarios.php";
            break;
        case "respondercuestionario":
            $cuestionario = $_REQUEST["cuestionario"];
            $_SESSION["cuestionario"] = $cuestionario;
            $vista = "preguntas.php";
            break;
        case "contestarpregunta":
            $pregunta = $_GET["pregunta"];
            $_SESSION["pregunta"] = $pregunta;
            $vista = "responder.php";
            break;
        case "guardarrespuesta":
            $respuesta = $_REQUEST["respuesta"];
            $_SESSION["respuesta"] = $respuesta;
            $pregunta = $_SESSION["pregunta"];
            $guardar = guardarRespuesta($pregunta, $respuesta);
            if($guardar = true){
                $mensaje = "Respuesta guardada";
            }
            $vista = "preguntas.php";
            break;
        case "crearcuestionario":
            $cuestionario = $_REQUEST["cuestionario2"];
            $_SESSION["cuestionario2"] = $cuestionario;
            $guardar = guardarCuestionario($cuestionario);
            if($guardar = true){
                $mensaje = "El cuestionario " . $cuestionario . " se ha creado con exito";
            }
            $vista = "cuestionarios.php";
            break;
        case "agregarpreguntas":
            $cuestionario = $_REQUEST["cuestionario"];
            $_SESSION["cuestionario"] = $cuestionario;
            $vista = "agregar.php";
            break;
        case "crearpreguntaycontinuar":
            $pregunta = $_REQUEST["pregunta"];
            $guardar = guardarPregunta($pregunta);
            if($guardar = true){
                $mensaje = "La pregunta " . $pregunta . " se ha creado con éxito";
            }
            $vista = "agregar.php";
            break;
        case "crearpreguntayfinalizar":
            $pregunta = $_REQUEST["pregunta"];
            $guardar = guardarPregunta($pregunta);
            if($guardar = true){
                $mensaje = "La pregunta " . $pregunta . " se ha creado con éxito";
            }
            $vista = "cuestionarios.php";
            break;
        case "vertodaslasrespuestas":
            $cuestionario = $_REQUEST["cuestionario"];
            $_SESSION["cuestionario"] = $cuestionario;
            $respuestasOk = verRespuestas();
            if($respuestasOk = true){
                $mensaje = "Las respuestas se han podido recorrer con el foreach";
            }
            $vista = "respuestas.php";
            break;
        case "cerrar":
            session_unset();
            session_destroy();
            $vista = "nombre.php";
            break;
    }
}


?>