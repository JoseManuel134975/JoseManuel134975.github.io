<?php

namespace App\Repository;

use App\Entity\Caja;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Caja>
 */
class CajaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Caja::class);
    }

  
    //    /**
    //     * @return Caja[] Returns an array of Caja objects
    //     */
    //    public function findByDate($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.fecha = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

       public function findOneByDate($value): ?Caja
       {
           return $this->createQueryBuilder('c')
               ->andWhere('c.fecha = :val')
               ->setParameter('val', $value)
               ->getQuery()
               ->getOneOrNullResult()
           ;
       }
}
