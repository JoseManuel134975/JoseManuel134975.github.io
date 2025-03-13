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
use App\Form\FormInstrumentoType;


class EscuelaMusicaController extends AbstractController
{
    #[Route('/escuela/musica', name: 'app_escuela_musica_index')]
    public function index(): Response
    {
        if ($this->getUser()->isProfesor()) {
            return $this->redirectToRoute('app_profesores');
        } else {
            return $this->redirectToRoute('app_alumno');
        }
    }



    #[Route('/escuela/musica/profesores', name: 'app_profesores')]
    public function profesores(Request $request, EntityManagerInterface $em): Response
    {
        $sesion = $request->getSession();
        $sesion->set('instrumentos', []);
        $instrumentos = $sesion->get('instrumentos');
        $instrumentosNo = $em->getRepository(Instrumento::class)->findNoImparte($this->getUser()->getId());

        return $this->render('escuela_musica/profesor.html.twig', [
            'noImparte' => $instrumentosNo,
            'instrumentos' => $instrumentos
        ]);
    }

    #[Route('/escuela/musica/grabarclases', name: 'app_grabar_clases')]
    public function grabarClases(Request $request, EntityManagerInterface $em): Response
    {
        $sesion = $request->getSession();
        $instrumentos = $sesion->get('instrumentos');
        $instrumentosNo = $em->getRepository(Instrumento::class)->findNoImparte($this->getUser()->getId());

        foreach($instrumentos as $instrumento){
            $instrumentoEncontrado = $em->getRepository(Instrumento::class)->find($instrumento->getId());
            $instrumentoEncontrado->setProfesor($this->getUser());
            $em->persist($instrumentoEncontrado);
            $em->flush();
        }

        $this->addFlash('grabado', 'Las clases se han grabado con éxito');

        return $this->render('escuela_musica/profesor.html.twig', [
            'noImparte' => $instrumentosNo,
            'instrumentos' => $instrumentos
        ]);
    }

    #[Route('/escuela/musica/impartirinstrumento/{instrumento}', name: 'app_impartir_instrumento')]
    public function impartirInstrumento(Request $request, EntityManagerInterface $em, Instrumento $instrumento): Response
    {
        $instrumentosNo = $em->getRepository(Instrumento::class)->findNoImparte($this->getUser()->getId());

        $sesion = $request->getSession();

        $instrumentos = $sesion->get('instrumentos');

        array_push($instrumentos, $instrumento);
        $sesion->set('instrumentos', $instrumentos);

        return $this->render('escuela_musica/profesor.html.twig', [
            'noImparte' => $instrumentosNo,
            'instrumentos' => $instrumentos
        ]);
    }

    #[Route('/escuela/musica/eliminarclase', name: 'app_eliminar_clases')]
    public function eliminarClases(Request $request, EntityManagerInterface $em): Response
    {
        $sesion = $request->getSession();

        $instrumentosNo = $em->getRepository(Instrumento::class)->findNoImparte($this->getUser()->getId());
        
        $sesion->set('instrumentos', []);
        $instrumentos = $sesion->get('instrumentos');

        return $this->render('escuela_musica/profesor.html.twig', [
            'noImparte' => $instrumentosNo,
            'instrumentos' => $instrumentos
        ]);
    }

    #[Route('/escuela/musica/alumno', name: 'app_alumno')]
    public function alumno(Request $request, EntityManagerInterface $em): Response
    {
        $sesion = $request->getSession();
        $sesion->set('matriculas', []);
        $matriculas = $sesion->get('matriculas');

        $matriculadoNo = $em->getRepository(Instrumento::class)->findNoMatriculado($this->getUser()->getId());

        return $this->render('escuela_musica/alumno.html.twig', [
            'noMatriculado' => $matriculadoNo,
            'matriculas' => $matriculas
        ]);
    }

    #[Route('/escuela/musica/matricularalumno/{instrumento}', name: 'app_matricular_alumno')]
    public function matricularAlumno(Request $request, EntityManagerInterface $em, Instrumento $instrumento): Response
    {
        $matricula = new Matricula();
        $matricula->setInstrumento($instrumento);
        $matricula->setAlumno($this->getUser());

        $sesion = $request->getSession();
        $matriculas = $sesion->get('matriculas');
        array_push($matriculas, $matricula);
        $sesion->set('matriculas', $matriculas);

        $matriculadoNo = $em->getRepository(Instrumento::class)->findNoMatriculado($this->getUser()->getId());

        return $this->render('escuela_musica/alumno.html.twig', [
            'noMatriculado' => $matriculadoNo,
            'matriculas' => $matriculas
        ]);
    }

    #[Route('/escuela/musica/eliminarmatricula', name: 'app_eliminar_matriculas')]
    public function eliminarMatriculas(Request $request, EntityManagerInterface $em): Response
    {
        $sesion = $request->getSession();

        $matriculadoNo = $em->getRepository(Instrumento::class)->findNoMatriculado($this->getUser()->getId());
        
        $sesion->set('matriculas', []);
        $matriculas = $sesion->get('matriculas');

        return $this->render('escuela_musica/alumno.html.twig', [
            'noMatriculado' => $matriculadoNo,
            'matriculas' => $matriculas
        ]);
    }

    #[Route('/escuela/musica/grabarmatriculas', name: 'app_grabar_matriculas')]
    public function grabarMatriculas(Request $request, EntityManagerInterface $em): Response
    {
        $sesion = $request->getSession();
        $matriculas = $sesion->get('matriculas');
        $matriculadoNo = $em->getRepository(Instrumento::class)->findNoMatriculado($this->getUser()->getId());

        foreach($matriculas as $matricula){
            $instrumentoEncontrado = $em->getRepository(Instrumento::class)->find($matricula->getInstrumento());
            $alumnoEncontrado = $em->getRepository(Usuario::class)->find($matricula->getAlumno());
            // dd($alumnoEncontrado);
            $matricula->setInstrumento($instrumentoEncontrado);
            $matricula->setAlumno($alumnoEncontrado);
            $em->persist($matricula);
            // $em->persist($matricula);
            $em->flush();
        }

        $this->addFlash('grabado', 'Las matriculas se han grabado con éxito');

        return $this->render('escuela_musica/alumno.html.twig', [
            'noMatriculado' => $matriculadoNo,
            'matriculas' => $matriculas
        ]);
    }
}
