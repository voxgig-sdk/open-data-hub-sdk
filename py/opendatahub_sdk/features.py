# OpenDataHub SDK feature factory

from opendatahub_sdk.feature.base_feature import OpenDataHubBaseFeature
from opendatahub_sdk.feature.test_feature import OpenDataHubTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OpenDataHubBaseFeature(),
        "test": lambda: OpenDataHubTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
