# OpenDataHub SDK feature factory

from opendatahub_sdk.feature.base_feature import OpenDataHubBaseFeature
from opendatahub_sdk.feature.ratelimit_feature import OpenDataHubRatelimitFeature
from opendatahub_sdk.feature.retry_feature import OpenDataHubRetryFeature
from opendatahub_sdk.feature.test_feature import OpenDataHubTestFeature
from opendatahub_sdk.feature.timeout_feature import OpenDataHubTimeoutFeature


_FEATURES = {
    "base": lambda: OpenDataHubBaseFeature(),
    "ratelimit": lambda: OpenDataHubRatelimitFeature(),
    "retry": lambda: OpenDataHubRetryFeature(),
    "test": lambda: OpenDataHubTestFeature(),
    "timeout": lambda: OpenDataHubTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
