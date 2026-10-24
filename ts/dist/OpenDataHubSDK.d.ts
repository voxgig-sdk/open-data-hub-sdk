import { GetDataBrowserEntity } from './entity/GetDataBrowserEntity';
export type * from './OpenDataHubTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { OpenDataHubEntityBase } from './OpenDataHubEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class OpenDataHubSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetDataBrowser(entopts?: Record<string, any>): GetDataBrowserEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): OpenDataHubSDK;
    tester(testopts?: any, sdkopts?: any): OpenDataHubSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof OpenDataHubSDK;
export { stdutil, config, BaseFeature, OpenDataHubEntityBase, OpenDataHubSDK, SDK, };
export type { DirectResult };
