"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NormalizedResponse {
    constructor(message, data) {
        this.message = message;
        this.data = data;
    }
    toJSON() {
        return {
            message: this.message,
            data: this.data,
        };
    }
}
exports.default = NormalizedResponse;
//# sourceMappingURL=normalized-response.js.map