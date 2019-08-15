<?php
/**
 * Base Controller class
 *
 * PHP version 7.2
 *
 * @category   App
 * @package    Controller
 * @author     Marko Majkic
 *
 */


namespace App\Controller;

use App\Service\LoggerService;
use FOS\RestBundle\Controller\FOSRestController;


class BaseController extends FOSRestController
{
    /**
     * @var LoggerService
     *
     */
    private $loggerService;

    /**
     * BaseApiController constructor.
     *
     * @param LoggerService $loggerService
     */
    public function __construct(LoggerService $loggerService)
    {
        $this->loggerService = $loggerService;
    }

    /**
     * @return LoggerService
     */
    public function getLoggerService(): LoggerService
    {
        return $this->loggerService;
    }

    /**
     * @param LoggerService $loggerService
     */
    public function setLoggerService(LoggerService $loggerService): void
    {
        $this->loggerService = $loggerService;
    }

}
