import { OpenDataHubEntityBase } from '../OpenDataHubEntityBase';
import type { OpenDataHubSDK } from '../OpenDataHubSDK';
import type { Control } from '../types';
import type { GetDataBrowser, GetDataBrowserListMatch } from '../OpenDataHubTypes';
declare class GetDataBrowserEntity extends OpenDataHubEntityBase<GetDataBrowser> {
    constructor(client: OpenDataHubSDK, entopts: any);
    make(this: GetDataBrowserEntity): GetDataBrowserEntity;
    list(this: any, reqmatch?: GetDataBrowserListMatch, ctrl?: Control): Promise<GetDataBrowserEntity[]>;
}
export { GetDataBrowserEntity };
