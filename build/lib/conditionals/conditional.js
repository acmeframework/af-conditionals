"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conditional {
}
exports.Conditional = Conditional;
function assert_conditional(value, c, assertMsg = "You condition was not met.") {
    if (!c.test(value)) {
        throw new TypeError(`${value} ${assertMsg}`);
    }
}
exports.assert_conditional = assert_conditional;
//# sourceMappingURL=conditional.js.map