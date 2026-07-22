# OpenDataHub SDK utility: make_context
require_relative '../core/context'
module OpenDataHubUtilities
  MakeContext = ->(ctxmap, basectx) {
    OpenDataHubContext.new(ctxmap, basectx)
  }
end
