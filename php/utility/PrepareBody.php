<?php
declare(strict_types=1);

// OpenDataHub SDK utility: prepare_body

class OpenDataHubPrepareBody
{
    public static function call(OpenDataHubContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
