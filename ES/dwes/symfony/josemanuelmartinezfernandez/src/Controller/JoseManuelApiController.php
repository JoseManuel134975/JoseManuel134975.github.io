<?php

namespace App\Controller;

use App\Entity\Instrumento;
use App\Entity\Matricula;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class JoseManuelApiController extends AbstractController
{
    #[Route('/api/matricula', name: 'app_api_jsonmatriculas', methods:['GET', 'POST'])]
    public function matriculas(EntityManagerInterface $em, Request $request, Security $security): JsonResponse
    {
        $cliente = $security->getUser();

        $matriculas = $em->getRepository(Matricula::class)->findByField('alumno', $cliente->getId());
        $datos = array_map(function($matricula) {
            return
            [
                'id' => $matricula->getId(),
                'instrumento' => $matricula->getInstrumento()->getNombre()
            ];
        }, $matriculas);

        return new JsonResponse($datos);
    }

    #[Route('/public/instrumentos', name: 'app_api_instrumentos')]
    public function posts(EntityManagerInterface $em, Request $request): JsonResponse
    {
        $instrumentos = $em->getRepository(Instrumento::class)->findAll();

        $arrayInstrumentos = [];

        foreach ($instrumentos as $i) {
            $tupla = ['id' => $i->getId(), 'nombre' => $i->getNombre()];
            array_push($arrayInstrumentos, $tupla);
        }

        return new JsonResponse(['instrumentos' => $arrayInstrumentos], JsonResponse::HTTP_OK);
    }

    #[Route('/api', name: 'app_api')]
    public function index(): Response
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }
}
