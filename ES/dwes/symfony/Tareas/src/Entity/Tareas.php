<?php

namespace App\Entity;

use App\Repository\TareasRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TareasRepository::class)]
class Tareas
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $fechaInicio = null;

    #[ORM\Column(length: 255)]
    private ?string $fechaFin = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFechaInicio(): ?string
    {
        return $this->fechaInicio;
    }

    public function setFechaInicio(string $fechaInicio): static
    {
        $this->fechaInicio = $fechaInicio;

        return $this;
    }

    public function getFechaFin(): ?string
    {
        return $this->fechaFin;
    }

    public function setFechaFin(string $fechaFin): static
    {
        $this->fechaFin = $fechaFin;

        return $this;
    }
}
