-- OpenDataHub SDK error

local OpenDataHubError = {}
OpenDataHubError.__index = OpenDataHubError


function OpenDataHubError.new(code, msg, ctx)
  local self = setmetatable({}, OpenDataHubError)
  self.is_sdk_error = true
  self.sdk = "OpenDataHub"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function OpenDataHubError:error()
  return self.msg
end


function OpenDataHubError:__tostring()
  return self.msg
end


return OpenDataHubError
