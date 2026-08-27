<?php
declare(strict_types=1);

// OpenDataHub SDK configuration

class OpenDataHubConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "OpenDataHub",
                "slug" => "open-data-hub",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://databrowser.opendatahub.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_data_browser" => [],
                ],
            ],
            "entity" => [
        'get_data_browser' => [
          'fields' => [
            [
              'name' => 'attributes',
              'short' => 'Resource attributes and metadata',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the resource',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Type of resource (e.g., mobility, tourism)',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_data_browser',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'parts' => [],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return OpenDataHubFeatures::make_feature($name);
    }
}
