<?php

namespace App\Controller;

use App\Service\Crawler\CrawlerService;
use FOS\RestBundle\Controller\Annotations as Rest;
use App\Service\LoggerService;
use GuzzleHttp\Exception\RequestException;
use http\Exception\InvalidArgumentException;
use mysql_xdevapi\Exception;
use PhpParser\Node\Expr\Cast\Object_;
use Spatie\Crawler\CrawlAllUrls;
use Spatie\Crawler\CrawlProfile;
use Spatie\Crawler\CrawlSubdomains;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Spatie\Crawler\Crawler;
use Spatie\Crawler\CrawlInternalUrls;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Crawled;
use Symfony\Component\HttpFoundation\Response;


class HomeController extends BaseController
{

    public function __construct(LoggerService $logger_service)
    {
        parent::__construct($logger_service);
    }

    /**
     * @Rest\Get("/", name="dashboard")
     */
    public function index()
    {
        return $this->render('index.html.twig');
    }

    /**
     * @Rest\Post("api/crawl", name="crawl")
     * @param Request $request
     * @return Response
     */
    public function crawlAction(Request $request)
    {

        $parameters = [];
        if ($content = $request->getContent()) {
            $parameters = json_decode($content, true);
        }

        $profile = $this->getProfile($parameters['profile'], $parameters['url']);

        Crawler::create()->ignoreRobots()
            ->setMaximumResponseSize(1024 * 1024 * 3)
            ->setConcurrency(1000)
            ->setMaximumDepth($parameters['depth'])
            ->setCrawlProfile($profile)
            ->setCrawlObserver(new CrawlerService())
            ->startCrawling($parameters['url']);


        return new Response();
    }

    /**
     * @Rest\Post("api/save", name="save")
     * @param Request $request
     * @return Response
     */
    public function saveAction(Request $request)
    {

        $response = new JsonResponse();
        $parameters = [];
        if ($content = $request->getContent()) {
            $parameters = json_decode($content, true);
        }

        $filteredData = array();
        $url = $parameters[0]['path'];
        foreach ($parameters as $item) {
            if ($item['title'] != '') {
                array_push($filteredData, $item['title']);
            }
        }

        try {
            $entityManager = $this->getDoctrine()->getManager();
            $crawl = new Crawled();

            $crawl->setEmail(json_encode($filteredData));
            $crawl->setUrl($url);

            $entityManager->persist($crawl);
            $entityManager->flush();

            $response->setData("Successfully saved data.");

        } catch (RequestException $requestException ) {
                $response->setData($requestException);
        }

        return $response;

    }

    /**
     * Fetch all saved data
     * @Rest\Get("api/fetch", name="fetch")
     * @return JsonResponse
     */
    public function fetchData()
    {
        $response = new JsonResponse();

        $data = $this->getDoctrine()
            ->getRepository(Crawled::class)
            ->findAll();

        if (!$data) {
            $response->setData("No data");
        } else {
            $response->setData($data);
        }

        return $response;
    }

    /**
     * @param string $profile
     * @param string $url
     * @return CrawlAllUrls|CrawlInternalUrls|CrawlSubdomains
     */
    public function getProfile(string $profile, string $url): CrawlProfile
    {
        switch ($profile) {
            case "All urls":
                return new CrawlAllUrls();
            case "Internal urls":
                return new CrawlInternalUrls($url);
            case "Subdomains":
                return new CrawlSubdomains($url);
            default:
                return new CrawlAllUrls();
        }
    }
}