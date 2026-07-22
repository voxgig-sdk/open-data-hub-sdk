
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpenDataHubSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await OpenDataHubSDK.test()
    equal(null !== testsdk, true)
  })

})
