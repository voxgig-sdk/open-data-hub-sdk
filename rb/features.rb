# OpenDataHub SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module OpenDataHubFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpenDataHubBaseFeature.new
    when "test"
      OpenDataHubTestFeature.new
    else
      OpenDataHubBaseFeature.new
    end
  end
end
