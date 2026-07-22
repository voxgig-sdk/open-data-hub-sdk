# OpenDataHub SDK configuration

module OpenDataHubConfig
  def self.make_config
    {
      "main" => {
        "name" => "OpenDataHub",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://databrowser.opendatahub.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_data_browser" => {},
        },
      },
      "entity" => {
        "get_data_browser" => {
          "fields" => [
            {
              "active" => true,
              "name" => "attribute",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "id",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "type",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 2,
            },
          ],
          "name" => "get_data_browser",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/",
                  "parts" => [],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    OpenDataHubFeatures.make_feature(name)
  end
end
