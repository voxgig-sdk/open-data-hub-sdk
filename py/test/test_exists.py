# ProjectName SDK exists test

import pytest
from opendatahub_sdk import OpenDataHubSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = OpenDataHubSDK.test(None, None)
        assert testsdk is not None
