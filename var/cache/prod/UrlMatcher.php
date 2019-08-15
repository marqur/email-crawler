<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/' => [[['_route' => 'dashboard', '_controller' => 'App\\Controller\\HomeController::index'], null, ['GET' => 0], null, false, false, null]],
        '/api/crawl' => [[['_route' => 'crawl', '_controller' => 'App\\Controller\\HomeController::crawlAction'], null, ['POST' => 0], null, false, false, null]],
        '/api/save' => [[['_route' => 'save', '_controller' => 'App\\Controller\\HomeController::saveAction'], null, ['POST' => 0], null, false, false, null]],
        '/api/fetch' => [[['_route' => 'fetch', '_controller' => 'App\\Controller\\HomeController::fetchData'], null, ['GET' => 0], null, false, false, null]],
    ],
    [ // $regexpList
    ],
    [ // $dynamicRoutes
    ],
    null, // $checkCondition
];
