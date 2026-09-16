# OpenDataHub SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module OpenDataHubFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpenDataHubBaseFeature.new
    when "ratelimit"
      OpenDataHubRatelimitFeature.new
    when "retry"
      OpenDataHubRetryFeature.new
    when "test"
      OpenDataHubTestFeature.new
    when "timeout"
      OpenDataHubTimeoutFeature.new
    else
      OpenDataHubBaseFeature.new
    end
  end
end
