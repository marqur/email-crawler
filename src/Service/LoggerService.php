<?php


namespace App\Service;

use App\Service\Logger\LoggerWrapper;
use Psr\Log\LoggerInterface;

class LoggerService
{

    /**
     * @var LoggerWrapper[]
     */
    private $loggers = array();

    /**
     * LoggerService constructor.
     *
     * @param LoggerInterface $main_logger
     *
     */
    public function __construct(LoggerInterface $main_logger)
    {
        $this->loggers['main'] = new LoggerWrapper($main_logger);
    }

    /**
     * Get logger instance
     *
     * @param string $log_name
     *
     * @return LoggerWrapper
     *
     * @throws \Exception
     */
    public function getLogger(string $log_name = 'main'): LoggerWrapper
    {
        if (!isset($this->loggers[$log_name])) {
            throw new \Exception('Logger with specified name does not exists');
        }

        return $this->loggers[$log_name];
    }

}
