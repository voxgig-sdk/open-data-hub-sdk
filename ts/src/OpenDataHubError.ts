
import { Context } from './Context'


class OpenDataHubError extends Error {

  isOpenDataHubError = true

  sdk = 'OpenDataHub'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  OpenDataHubError
}

