<?php
declare(strict_types=1);

// OpenDataHub SDK configuration

class OpenDataHubConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "OpenDataHub",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'active' => true,
              'name' => 'attribute',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
          ],
          'name' => 'get_data_browser',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/',
                  'parts' => [],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
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
