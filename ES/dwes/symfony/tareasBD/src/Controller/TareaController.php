<?php

namespace App\Controller;

// use App\Form\TareaType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
// Importo la clase del formulario
use App\Form\TareaType;
use App\Entity\Tarea;
// Importo el componente/clase Request para recibir solicitudes del formulario
use Symfony\Component\HttpFoundation\Request;


class TareaController extends AbstractController
{
    #[Route('/tarea', name: 'app_tarea')]
    public function index(Request $solicitud): Response
    {
        // Crearmos el objeto vacío tarea
        $tarea = new Tarea();
        // Crear un formulario y se le pasa el objeto tarea
        // Aplicar el método GET
        $formulario = $this->createForm(TareaType:: class, $tarea, [
            'method' => 'GET'
        ]);
        // Recogemos el formulario
        $formulario->handleRequest($solicitud);
        // Comprobamos que ha sido enviado
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            // Recogemos los datos a través del objeto
            $tarea = $formulario->getData();
            $this -> guardarTarea($tarea, $solicitud);
        }
        // Pasamos el formulario a la página como un parámetro
        return $this->render('tarea/index.html.twig', [
            // Pasamos todo como parámetro para que no haya problemas al renderizar/mostrar
            'titulo' => 'Agenda de tareas',
            'formulario' => $formulario,
            'tarea' => $tarea,
            'tareas' => $solicitud -> getSession() -> get('tareas'), // La flecha es como el punto en otros lenguajes*
            // *Se accede al método/función con el
        ]);
    }

    public function guardarTarea(Tarea $tarea, Request $request) {
        // Recogemos la sesión del objeto Request
        $sesion = $request -> getSession();
        // Intento recoger el array de tareas, y sino existe me devuelve un array vacío
        $tareas = $sesion -> get('tareas', []);
        // Guardo en el array tareas la tarea
        array_push($tareas, $tarea);
        // Por último guardo el array tareas en la sesión
        $sesion -> set('tareas', $tareas);
    }
}
