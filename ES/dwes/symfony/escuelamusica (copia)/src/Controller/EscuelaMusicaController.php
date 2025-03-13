<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Instrumento;
use App\Entity\Usuario;
use App\Entity\Matricula;
use App\Form\FormImpartirInstrumentoType;


class EscuelaMusicaController extends AbstractController
{
    #[Route('/escuela/musica', name: 'app_escuela_musica_index')]
    public function index(): Response
    {
        if ($this->getUser()->isProfesor()) {
            return $this->redirectToRoute('app_profesor');
        } else {

            return $this->redirectToRoute('app_alumno');
        }
    }

    #[Route('/escuela/musica/profesor', name: 'app_profesor')]
    public function profesor(Request $request, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(FormImpartirInstrumentoType::class, $request);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Recojo el instrumento, en forma de array 
            $data = $form->getData();
            // Obtengo el id del array
            $id = $data['instrumento'];
            // Obtengo el instrumento en forma de objeto
            $instrumento = $em->getRepository(Instrumento::class)->find($id);
            // Añado el instrumento (objeto) a la lista de instrumentos del profesor
            $this->getUser()->addInstrumento($instrumento);
            // Grabo en la base de datos
            $em->persist($instrumento);
            $em->flush();
        }

        // Por poner algo
        return $this->render('escuelamusica/misclases.html.twig');
    }

    #[Route('/escuela/musica/alumno', name: 'app_alumno')]
    public function alumno(Request $request, EntityManagerInterface $em): Response
    {
        // Por poner algo
        return $this->render(
            'escuelamusica/alumnado.html.twig',
            ['alumno' => $this->getUser()]
        );
    }

    #[Route('/escuela/musica/alumnos/{id}', name: 'app_ver_alumnado_matriculado')]
    public function alumnadoMatriculado(Instrumento $instrumento, Request $request, EntityManagerInterface $em): Response
    {
        // Con dd depuramos (console.log, vardump o dicho de otra forma, debugger)
        // dd($instrumento)
        return $this->render(
            'escuelamusica/alumnado_matriculado.html.twig',
            ['instrumento' => $instrumento]
        );
    }

    #[Route('/escuela/musica/alumnos/{id}', name: 'app_ver_alumnado_matriculado')]
    public function alumnado(Request $request, EntityManagerInterface $em): Response
    {
        $alumnado = $em->getRepository(Usuario::class)->findByExampleField(false);

        // Por poner algo
        return $this->render(
            'escuelamusica/todoalumnado.html.twig',
            ['alumnado' => $alumnado]
        );
    }

    #[Route('/escuela/musica/instrumento', name: 'app_instrumentos')]
    public function instrumentos(Request $request, EntityManagerInterface $em): Response
    {
        // Por poner algo
        return $this->render('escuelamusica/index.html.twig');
    }

    #[Route('/escuela/musica/matricula', name: 'app_ver_matricula_alumno')]
    public function verMatriculaAlumno(Usuario $alumno, Request $request, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(FormImpartirInstrumentoType::class, $request);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Recojo el instrumento, en forma de array 
            $data = $form->getData();
            // Obtengo el id del array
            $id = $data['instrumento'];
            // Obtengo el instrumento en forma de objeto
            $instrumento = $em->getRepository(Instrumento::class)->find($id);
            // Añado el instrumento (objeto) a la lista de instrumentos del profesor
            $alumno->addMatricula($instrumento);
            // Grabo en la base de datos
            $em->persist($instrumento);
            $em->flush();
        }

        // Por poner algo
        return $this->render(
            'escuelamusica/matriculaalumno.html.twig',
            [
                'alumno' => $alumno,
                'form' => $form
            ]
        );
    }
}
