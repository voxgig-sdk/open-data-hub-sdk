<?php
declare(strict_types=1);

// OpenDataHub SDK utility: result_body

class OpenDataHubResultBody
{
    public static function call(OpenDataHubContext $ctx): ?OpenDataHubResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
