<?php

namespace App\Repository;

use App\Entity\Crawled;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Crawler|null find($id, $lockMode = null, $lockVersion = null)
 * @method Crawler|null findOneBy(array $criteria, array $orderBy = null)
 * @method Crawler[]    findAll()
 * @method Crawler[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CrawlerRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Crawled::class);
    }

    // /**
    //  * @return Crawler[] Returns an array of Crawler objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Crawler
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
