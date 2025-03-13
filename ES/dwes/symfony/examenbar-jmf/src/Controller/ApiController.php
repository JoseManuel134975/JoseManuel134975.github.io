<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ApiController extends AbstractController
{
    #[Route('/api', name: 'app_api')]
    public function index(): Response
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    // #[Route('/public/compras', name: 'app_api_compras_de_proveedor')]
    // public function posts(EntityManagerInterface $em, Request $request): JsonResponse
    // {
    //     $posts = $em->getRepository(Post::class)->findAll();

    //     $arrayPosts = [];

    //     foreach ($posts as $p) {
    //         $tupla = ['id' => $p->getId(), 'userId' => $p->getUser(), 'content' => $p->getContent(), 'createdAt' => $p->getCreatedAt(), 'image' => $p->getImage(), 'day' => $p->getDay(), 'likes' => $p->getLikes()];
    //         array_push($arrayPosts, $tupla);
    //     }

    //     return new JsonResponse(['posts' => $arrayPosts], JsonResponse::HTTP_OK);
    // }
}
