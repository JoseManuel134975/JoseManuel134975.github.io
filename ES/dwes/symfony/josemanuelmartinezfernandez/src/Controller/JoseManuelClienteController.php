<?php

namespace App\Controller;

use App\Entity\Usuario;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\PasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class JoseManuelClienteController extends AbstractController
{
    #[Route('/cliente/login', name: 'app_cliente_login')]
    public function login(HttpClientInterface $httpClient, UserPasswordHasherInterface $userPasswordHasher, Request $request, EntityManagerInterface $em): Response
    {
        $username = $request->query->get('username');
        $password = $request->query->get('password');

        dd($username);
        $usuario = $em->getRepository(Usuario::class)->findOneBySomeField($username);
        // $contrasena = $em->getRepository(Usuario::class)->upgradePassword();
        // $usuario->setPassword($userPasswordHasher->hashPassword($usuario, $password));
        dd($usuario);

        $response = $httpClient->request('POST', 'http://localhost:8000/api/login', [
            'json' => [
                'username' => $username,
                'password' => $password
            ]
        ]);

        $json = json_decode($response->getContent(),true);
        $request->getSession()->set('token', $json['token']);
        return new Response($json['token']);
    }

    #[Route('/jose/manuel/cliente', name: 'app_jose_manuel_cliente')]
    public function index(): Response
    {
        return $this->render('jose_manuel_cliente/index.html.twig', [
            'controller_name' => 'JoseManuelClienteController',
        ]);
    }
}
