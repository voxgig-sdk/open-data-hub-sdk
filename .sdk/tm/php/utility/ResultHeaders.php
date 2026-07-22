<?php
declare(strict_types=1);

// OpenDataHub SDK utility: result_headers

class OpenDataHubResultHeaders
{
    public static function call(OpenDataHubContext $ctx): ?OpenDataHubResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
