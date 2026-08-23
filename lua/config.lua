-- OpenDataHub SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "OpenDataHub",
      slug = "open-data-hub",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://databrowser.opendatahub.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["get_data_browser"] = {},
      },
    },
    entity = {
      ["get_data_browser"] = {
        ["fields"] = {
          {
            ["name"] = "attributes",
            ["short"] = "Resource attributes and metadata",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the resource",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["short"] = "Type of resource (e.g., mobility, tourism)",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "get_data_browser",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/",
                ["parts"] = {},
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
