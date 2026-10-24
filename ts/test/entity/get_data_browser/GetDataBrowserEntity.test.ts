

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { OpenDataHubSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetDataBrowserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPEN_DATA_HUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPEN_DATA_HUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenDataHubSDK.test()
    const ent = testsdk.GetDataBrowser()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('get_data_browser hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of OpenDataHubSDK.test(offline).GetDataBrowser().stream('list')) { }
    }, /offline/)

    for await (const _item of OpenDataHubSDK.test(offline).GetDataBrowser()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = OpenDataHubSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.GetDataBrowser().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of OpenDataHubSDK.test().GetDataBrowser().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new OpenDataHubSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.GetDataBrowser().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.GetDataBrowser().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = OpenDataHubSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.GetDataBrowser().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPEN_DATA_HUB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_data_browser.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"attributes":{"a":true,"h":"Attributes","n":"attributes","r":false,"sh":"Resource attributes and metadata","t":"`$OBJECT`","key$":"attributes","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the resource","t":"`$STRING`","key$":"id","index$":1},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Type of resource (e.g., mobility, tourism)","t":"`$STRING`","key$":"type","index$":2}},"id":{"field":"id","name":"id"},"name":"get_data_browser","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/","q":{},"r":{},"rs":{"alternatives":[{"kind":"raw","media":"text/html"}],"kind":"json","media":"application/json"},"s":[],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"get_data_browser","name__orig":"get_data_browser","Name":"GetDataBrowser","name_":"get_data_browser","name-":"get-data-browser","NAME":"GET_DATA_BROWSER","index$":0}, {"active":true,"entity":"get_data_browser","key$":"BasicGetDataBrowserFlow","kind":"basic","name":"BasicGetDataBrowserFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"get_data_browser_ref01"}}],"index$":0}]}, 'GetDataBrowser', {"GET /":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_data_browser_ref01_data = Object.values(setup.data.existing.get_data_browser)[0] as any

    // LIST
    const get_data_browser_ref01_ent = client.GetDataBrowser()
    const get_data_browser_ref01_match: any = {}

    const get_data_browser_ref01_list = (await get_data_browser_ref01_ent.list(get_data_browser_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_data_browser/GetDataBrowserTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = OpenDataHubSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_data_browser01','get_data_browser02','get_data_browser03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPEN_DATA_HUB_TEST_GET_DATA_BROWSER_ENTID': idmap,
    'OPEN_DATA_HUB_TEST_LIVE': 'FALSE',
    'OPEN_DATA_HUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['OPEN_DATA_HUB_TEST_GET_DATA_BROWSER_ENTID']

  const live = 'TRUE' === env.OPEN_DATA_HUB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPEN_DATA_HUB_TEST_GET_DATA_BROWSER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new OpenDataHubSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.OPEN_DATA_HUB_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
