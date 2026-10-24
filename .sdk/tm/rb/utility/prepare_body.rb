# OpenDataHub SDK utility: prepare_body
require_relative 'media'
module OpenDataHubUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return OpenDataHubUtilities.raw_body(ctx.reqdata) if OpenDataHubUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
