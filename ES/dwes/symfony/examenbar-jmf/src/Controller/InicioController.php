<?php

namespace App\Controller;

use App\Entity\Caja;
use App\Entity\Gasto;
use App\Entity\Proveedor;
use App\Form\CajaType;
use App\Form\GastoType;
use App\Form\LibroType;
use App\Repository\CajaRepository;
use App\Repository\GastoRepository;
use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class InicioController extends AbstractController
{
    #[Route('/', name: 'app_inicio')]
    public function index(Request $request, EntityManagerInterface $em): Response
    {
        $cajasRepository = $em->getRepository(Caja::class)->findAll();
        $sesion = $request->getSession();
        $sesion->set('cajas', []);
        $cajas = $cajasRepository;
        $sesion->set('cajas', $cajas);

        return $this->render('inicio/index.html.twig', []);
    }

    #[Route('/Caja', name: 'app_caja_index')]
    public function mostrarCajas(EntityManagerInterface $em, Request $request): Response
    {
        $sesion = $request->getSession();
        $cajas = $sesion->get('cajas');

        return $this->render('inicio/cajas.html.twig', [
            'cajas' => $cajas
        ]);
    }

    #[Route('/libro', name: 'app_libro_index')]
    public function resumen(EntityManagerInterface $em, Request $request): Response
    {
        $form = $this->createForm(LibroType::class);
        $form->handleRequest($request);
        $submit = false;
        $caja = new Caja();

        if ($form->isSubmitted() && $form->isValid()) {
            $submit = true;
            $fecha = $form->get('fecha')->getData();
            $fecha = date_format($fecha, 'Y-m-d');
            $caja = $em->getRepository(Caja::class)->findOneByDate($fecha);
            $compras = $em->getRepository(Gasto::class)->findByDate($fecha);

            $cantidades = array_map(function($compra) {
                return $compra->getCantidad();
            }, $compras);

            // dd($cantidades);
            $total = array_reduce($cantidades, function($carry, $item) {
                $carry += $item;
                return $carry;
            });

            return $this->render('inicio/resumen.html.twig', [
                'submit' => $submit,
                'caja' => $caja,
                'compras' => $compras,
                'total' => $total
            ]);
        }

        return $this->render('inicio/resumen.html.twig', [
            'form' => $form,
            'submit' => $submit
        ]);
    }

    #[Route('/gasto', name: 'app_gasto_index')]
    public function mostrarCompras(EntityManagerInterface $em): Response
    {
        $compras = $em->getRepository(Gasto::class)->findAll();

        return $this->render('inicio/compras.html.twig', [
            'compras' => $compras
        ]);
    }

    #[Route('/proveedor', name: 'app_proveedor_index')]
    public function mostrarProveedores(EntityManagerInterface $em): Response
    {
        $proveedores = $em->getRepository(Proveedor::class)->findAll();

        return $this->render('inicio/proveedores.html.twig', [
            'proveedores' => $proveedores,
        ]);
    }



    #[Route('/gasto/new', name: 'app_gasto_new')]
    public function nuevaCompra(EntityManagerInterface $em, Request $request): Response
    {
        $compra = new Gasto();
        $form = $this->createForm(GastoType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $fecha = $form->get('fecha')->getData();
            $cantidad = $form->get('cantidad')->getData();
            $proveedor = $form->get('proveedor')->getData();
            $factura = $form->get('factura')->getData();
            $compra->setFecha($fecha);
            $compra->setCantidad($cantidad);
            $compra->setProveedor($proveedor);
            $compra->setFactura($factura);
            $em->persist($compra);
            $em->flush();

            return $this->redirectToRoute('app_gasto_index');
        }

        return $this->render('inicio/nueva_compra.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/gasto/{id}/edit', name: 'app_gasto_edit')]
    public function editarCompra(EntityManagerInterface $em, Request $request, Gasto $compra): Response
    {
        $form = $this->createForm(GastoType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $fecha = $form->get('fecha')->getData();
            $cantidad = $form->get('cantidad')->getData();
            $proveedor = $form->get('proveedor')->getData();
            $factura = $form->get('factura')->getData();
            $compra->setFecha($fecha);
            $compra->setCantidad($cantidad);
            $compra->setProveedor($proveedor);
            $compra->setFactura($factura);
            $em->persist($compra);
            $em->flush();

            return $this->redirectToRoute('app_gasto_index');
        }

        return $this->render('inicio/nueva_compra.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/Caja/new', name: 'app_caja_new')]
    public function nuevaCaja(Request $request): Response
    {
        $caja = new Gasto();
        $form = $this->createForm(CajaType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $fecha = $form->get('fecha')->getData();
            $cantidad = $form->get('cantidad')->getData();
            $caja->setFecha($fecha);
            $caja->setCantidad($cantidad);

            $sesion = $request->getSession();
            $cajas = $sesion->get('cajas');
            // dd($cajas);
            array_push($cajas, $caja);
            $sesion->set('cajas', $cajas);

            return $this->redirectToRoute('app_caja_index');
        }

        return $this->render('inicio/nueva_caja.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/proveedor/compras/{id}', name: 'app_proveedor_compras')]
    public function mostrarComprasHechasPor(EntityManagerInterface $em, Proveedor $proveedor): Response
    {
        // $proveedor = $em->getRepository(Proveedor::class)->find();
        $compras = $em->getRepository(Gasto::class)->findByProvider($proveedor);

        $cantidades = array_map(function($compra) {
            return $compra->getCantidad();
        }, $compras);

        $total = array_reduce($cantidades, function($carry, $item) {
            $carry += $item;
            return $carry;
        });

        return $this->render('inicio/compras_hechas_por.html.twig', [
            'proveedor' => $proveedor,
            'compras' => $compras,
            'total' => $total
        ]);
    }
}
