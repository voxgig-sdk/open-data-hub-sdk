# OpenDataHub SDK utility: make_context

from projectname_sdk.core.context import OpenDataHubContext


def make_context_util(ctxmap, basectx):
    return OpenDataHubContext(ctxmap, basectx)
