<?php
declare(strict_types=1);

// OpenDataHub SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class OpenDataHubMakeContext
{
    public static function call(array $ctxmap, ?OpenDataHubContext $basectx): OpenDataHubContext
    {
        return new OpenDataHubContext($ctxmap, $basectx);
    }
}
