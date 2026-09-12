# OpenDataHub SDK configuration

module OpenDataHubConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "OpenDataHub",
        "slug" => "open-data-hub",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "name" => "attributes",
              "short" => "Resource attributes and metadata",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the resource",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "short" => "Type of resource (e.g., mobility, tourism)",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "get_data_browser",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/",
                  "segments" => [],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [],
                },
              ],
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
