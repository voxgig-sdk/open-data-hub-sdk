# OpenDataHub SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

OpenDataHubUtility.registrar = ->(u) {
  u.clean = OpenDataHubUtilities::Clean
  u.done = OpenDataHubUtilities::Done
  u.make_error = OpenDataHubUtilities::MakeError
  u.feature_add = OpenDataHubUtilities::FeatureAdd
  u.feature_hook = OpenDataHubUtilities::FeatureHook
  u.feature_init = OpenDataHubUtilities::FeatureInit
  u.fetcher = OpenDataHubUtilities::Fetcher
  u.make_fetch_def = OpenDataHubUtilities::MakeFetchDef
  u.make_context = OpenDataHubUtilities::MakeContext
  u.make_options = OpenDataHubUtilities::MakeOptions
  u.make_request = OpenDataHubUtilities::MakeRequest
  u.make_response = OpenDataHubUtilities::MakeResponse
  u.make_result = OpenDataHubUtilities::MakeResult
  u.make_point = OpenDataHubUtilities::MakePoint
  u.make_spec = OpenDataHubUtilities::MakeSpec
  u.make_url = OpenDataHubUtilities::MakeUrl
  u.param = OpenDataHubUtilities::Param
  u.prepare_auth = OpenDataHubUtilities::PrepareAuth
  u.prepare_body = OpenDataHubUtilities::PrepareBody
  u.prepare_headers = OpenDataHubUtilities::PrepareHeaders
  u.prepare_method = OpenDataHubUtilities::PrepareMethod
  u.prepare_params = OpenDataHubUtilities::PrepareParams
  u.prepare_path = OpenDataHubUtilities::PreparePath
  u.prepare_query = OpenDataHubUtilities::PrepareQuery
  u.graphql_body = OpenDataHubUtilities::GraphqlBody
  u.graphql_errors = OpenDataHubUtilities::GraphqlErrors
  u.result_basic = OpenDataHubUtilities::ResultBasic
  u.result_body = OpenDataHubUtilities::ResultBody
  u.result_headers = OpenDataHubUtilities::ResultHeaders
  u.transform_request = OpenDataHubUtilities::TransformRequest
  u.transform_response = OpenDataHubUtilities::TransformResponse
}
