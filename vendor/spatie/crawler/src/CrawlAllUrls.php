<?php

namespace Spatie\Crawler;

use Psr\Http\Message\UriInterface;

class CrawlAllUrls extends CrawlProfile
{
    public function shouldCrawl(UriInterface $url): bool
    {
        $banedUrls = ["linkedin", "facebook"];
        
        foreach ($banedUrls as $banned) {
            if (strpos($url, $banned) !== false) {
                return false;
            }
        }
        
        return true;
    }
}
