import { Context } from './Context';
declare class OpenDataHubError extends Error {
    isOpenDataHubError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { OpenDataHubError };
