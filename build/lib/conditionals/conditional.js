"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conditional {
    constructor(assertMsg) {
        this.assertMsg = assertMsg;
    }
    assert(value) {
        if (!this.test(value)) {
            throw new TypeError(`${value} ${this.assertMsg}`);
        }
    }
}
exports.Conditional = Conditional;
//# sourceMappingURL=conditional.js.map