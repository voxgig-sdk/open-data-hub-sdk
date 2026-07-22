package voxgigopendatahubsdk

import (
	"github.com/voxgig-sdk/open-data-hub-sdk/go/core"
	"github.com/voxgig-sdk/open-data-hub-sdk/go/entity"
	"github.com/voxgig-sdk/open-data-hub-sdk/go/feature"
	_ "github.com/voxgig-sdk/open-data-hub-sdk/go/utility"
)

// Type aliases preserve external API.
type OpenDataHubSDK = core.OpenDataHubSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type OpenDataHubEntity = core.OpenDataHubEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type OpenDataHubError = core.OpenDataHubError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetDataBrowserEntityFunc = func(client *core.OpenDataHubSDK, entopts map[string]any) core.OpenDataHubEntity {
		return entity.NewGetDataBrowserEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewOpenDataHubSDK = core.NewOpenDataHubSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewOpenDataHubSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *OpenDataHubSDK  { return NewOpenDataHubSDK(nil) }
func Test() *OpenDataHubSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
