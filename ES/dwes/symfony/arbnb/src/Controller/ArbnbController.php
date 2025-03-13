<?php

namespace App\Controller;

use App\Entity\Alojamiento;
use App\Entity\Usuario;
use App\Entity\Alquiler;
use App\Form\FormAlojamientoType;
use App\Repository\AlojamientoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\Entity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ArbnbController extends AbstractController
{
    #[Route('/arbnb', name: 'app_arbnb')]
    public function index(): Response
    {
        return $this->render('arbnb/index.html.twig', [
            'titulo' => 'Bienvenido',
        ]);
    }

    #[Route('/arbnb/misalojamientos', name: 'app_mis_alojamientos')]
    public function misAlojamientos(Request $request, EntityManagerInterface $em): Response
    {
        $alojamiento = new Alojamiento();
        $form = $this->createForm(FormAlojamientoType::class, $alojamiento);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $alojamiento->setPropietario($this->getUser());
            $em->persist($alojamiento);
            $em->flush();
        }

        return $this->render('arbnb/misalojamientos.html.twig', [            
            'titulo' => 'Mis alojamientos',
            'form' => $form,
        ]);
    }

    #[Route('/arbnb/{id}/misalojamientos', name: 'app_alquileres_del_alojamiento')]
    public function alquileresAlojamientos(Alojamiento $alojamiento): Response
    {
        return $this->render('arbnb/alquilerdelalojamiento.html.twig', [            
            'titulo' => 'Mis alquileres del alojamiento',
            'alojamiento' => $alojamiento,
        ]);
    }

    #[Route('/arbnb/misalojamientosalquilados', name: 'app_mis_alojamientos_alquilados')]
    public function misAlojamientosAlquilados(): Response
    {
        return $this->render('arbnb/index.html.twig', [            
            'titulo' => 'Mis alojamientos Alquilados',
        ]);
    }

    #[Route('/arbnb/alquilar', name: 'app_alquilar')]
    public function alquilar(EntityManagerInterface $em): Response
    {
        # Leemos toda la tabla 'alojamientos' || Se puede leer desde el repositorio específico***
        $casa = $em->getRepository(Alojamiento::class)->findAll();

        return $this->render('arbnb/alquilar.html.twig', [            
            'titulo' => 'Alquilar',
            'casas' => $casa,
        ]);
    }

    
    #[Route('/arbnb/misalquileres', name: 'app_mis_alquileres')]
    public function misAlquileres(): Response
    {
        return $this->render('arbnb/index.html.twig', [            
            'titulo' => 'Mis alquileres',
        ]);
    }

    #[Route('/arbnb/{id}/misalquileres', name: 'app_realizar_alquiler')]
    public function realizarAlquileres(Alojamiento $alojamiento, EntityManagerInterface $em): Response
    {
        $alquiler = new Alquiler();
        $alquiler->setCliente($this->getUser());
        $alquiler->setAlojamiento($alojamiento);
        
        $em->persist($alquiler);
        $em->flush();

        return $this->render('arbnb/misalquileres.html.twig', [            
            'titulo' => 'Mis alquileres',
            'alquileres' => $alquiler,
        ]);
    }



}
