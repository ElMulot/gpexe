<?php

declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

// Recompile the container if required
$process = new Process(['bin/console', 'about']);

$isDebug = in_array('--debug', $_SERVER['argv'], true);

if ($isDebug) {
    echo "Process [".getmypid()."] is making sure DI container is ready";
}

$process->run();

if (!$process->isSuccessful()) {
    echo " [ERROR]" . PHP_EOL;
    throw new ProcessFailedException($process);
}

if ($isDebug) {
    echo " [OK]".PHP_EOL;
}