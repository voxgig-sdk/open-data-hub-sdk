# frozen_string_literal: true

# Typed models for the OpenDataHub SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetDataBrowser entity data model.
#
# @!attribute [rw] attribute
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GetDataBrowser = Struct.new(
  :attribute,
  :id,
  :type,
  keyword_init: true
)

# Request payload for GetDataBrowser#list.
#
# @!attribute [rw] attribute
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GetDataBrowserListMatch = Struct.new(
  :attribute,
  :id,
  :type,
  keyword_init: true
)

