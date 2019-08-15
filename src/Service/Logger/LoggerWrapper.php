<?php


namespace App\Service\Logger;

use Psr\Log\LoggerInterface;

/**
 * Wrapper class around Monolog Logger class
 *
 * @category   App
 * @package    Service\Logger
 */
class LoggerWrapper implements ILogger
{

    /**
     * @var LoggerInterface
     */
    private $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    /**
     * System is unusable.
     *
     * @param string $message
     * @param array $context
     *
     * @return void
     */
    public function emergency($message, array $context = array())
    {
        $this->logger->emergency($this->prepareMessage($message), $context);
    }

    /**
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     *
     * @param string $message
     * @param array $context
     *
     * @return void
     */
    public function alert($message, array $context = array())
    {
        $this->logger->alert($this->prepareMessage($message), $context);
    }

    /**
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     *
     * @param string $message
     * @param array $context
     *
     * @return void
     */
    public function critical($message, array $context = array())
    {
        $this->logger->critical($this->prepareMessage($message), $context);
    }

    /**
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     *
     * @param string $message
     * @param array $context
     *
     * @return void
     */
    public function error($message, array $context = array())
    {
        $this->logger->error($this->prepareMessage($message), $context);
    }

    /**
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     *
     * @param string $message
     * @param array $context
     *
     * @return void
     */
    public function warning($message, array $context = array())
    {
        $this->logger->warning($this->prepareMessage($message), $context);
    }

    /**
     * Normal but significant events.
     *
     * @param string $message
     * @param array $context
     *
     * @return void
     */
    public function notice($message, array $context = array())
    {
        $this->logger->notice($this->prepareMessage($message), $context);
    }

    /**
     * Interesting events.
     *
     * Example: User logs in, SQL logs.
     *
     * @param string $message
     * @param array $context
     *
     * @return void
     */
    public function info($message, array $context = array())
    {
        $this->logger->info($this->prepareMessage($message), $context);
    }

    /**
     * Detailed debug information.
     *
     * @param string $message
     * @param array $context
     *
     * @return void
     */
    public function debug($message, array $context = array())
    {
        $this->logger->debug($this->prepareMessage($message), $context);
    }

    /**
     * Prepare message for logging
     *
     * @param $message
     *
     * @return string
     */
    private function prepareMessage($message) : string
    {
        return $message instanceof \Throwable ? $this->formatException($message) : $message;
    }

    /**
     * Parse exception object
     *
     * @param \Throwable $e
     *
     * @return string
     */
    private function formatException(\Throwable $e) : string
    {
        $trace_string = $e->getTraceAsString();
        $exploded_trace = explode("\n", $trace_string);

        $log_message = array(
            'message' => $e->getMessage(),
            'code' => $e->getCode(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $exploded_trace
        );

        return json_encode($log_message);
    }
}