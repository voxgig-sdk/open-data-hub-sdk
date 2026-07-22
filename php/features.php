<?php
declare(strict_types=1);

// OpenDataHub SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class OpenDataHubFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new OpenDataHubBaseFeature();
            case "test":
                return new OpenDataHubTestFeature();
            default:
                return new OpenDataHubBaseFeature();
        }
    }
}
