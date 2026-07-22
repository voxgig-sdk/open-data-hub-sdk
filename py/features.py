# OpenDataHub SDK feature factory

from feature.base_feature import OpenDataHubBaseFeature
from feature.test_feature import OpenDataHubTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OpenDataHubBaseFeature(),
        "test": lambda: OpenDataHubTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
