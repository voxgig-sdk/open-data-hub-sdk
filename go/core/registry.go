package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetDataBrowserEntityFunc func(client *OpenDataHubSDK, entopts map[string]any) OpenDataHubEntity

