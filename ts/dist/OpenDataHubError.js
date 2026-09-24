"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenDataHubError = void 0;
class OpenDataHubError extends Error {
    isOpenDataHubError = true;
    sdk = 'OpenDataHub';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.OpenDataHubError = OpenDataHubError;
//# sourceMappingURL=OpenDataHubError.js.map