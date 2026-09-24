
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpenDataHubSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = OpenDataHubSDK.test()
    equal(testsdk instanceof OpenDataHubSDK, true,
      'OpenDataHubSDK.test() must return a client synchronously')
  })

})
