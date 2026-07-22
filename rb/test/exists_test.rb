# OpenDataHub SDK exists test

require "minitest/autorun"
require_relative "../OpenDataHub_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = OpenDataHubSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
