<?php

namespace App\Service\Crawler;

use DOMDocument;
use Spatie\Crawler\CrawlObserver;
use Psr\Http\Message\UriInterface;
use Psr\Http\Message\ResponseInterface;
use GuzzleHttp\Exception\RequestException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;


class CrawlerService extends CrawlObserver
{

    private $pages = [];

    public function willCrawl(UriInterface $url)
    {
    }

    /**
     * @param UriInterface $url
     * @param ResponseInterface $response
     * @param UriInterface|null $foundOnUrl
     */
    public function crawled(
        UriInterface $url,
        ResponseInterface $response,
        ?UriInterface $foundOnUrl = null
    )
    {
        // just domain
        $host = $url->getHost();
        // with routes
        $fullPath = $url->getPath();

        if($response->getBody()) {
            $doc = new DOMDocument();
            @$doc->loadHTML($response->getBody());
            $DomNodeList = @$doc->getElementsByTagName('a');
            $urls = "";
            foreach($DomNodeList as $url) {
                $urls .= strval($url->getAttribute('href'));
            }

            $pattern = "/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+.[a-zA-Z]{2,4}/";
            preg_match_all($pattern, $urls, $matches);

            foreach ($matches as $match) {
                $emails = array();
                foreach ($match as $email) {
                    if(!in_array($email, $emails)){
                        $emails[] = substr($email, 0, (strpos($email, "com") + 3));

                    }
                }
                $this->pages[] = [
                    'path' => ($fullPath == "/") ? $host : $host .''. $fullPath,
                    'title' => $emails
                ];

            }
        }
    }

    /**
     * @param UriInterface $url
     * @param RequestException $requestException
     * @param UriInterface|null $foundOnUrl
     * @return ResponseInterface|null
     */
    public function crawlFailed(
        UriInterface $url,
        RequestException $requestException,
        ?UriInterface $foundOnUrl = null
    )
    {
        return $requestException->getResponse();
    }


    public function finishedCrawling()
    {
        $response = new JsonResponse();
        $response->setData($this->pages);

        echo ($response->getContent());
    }

}