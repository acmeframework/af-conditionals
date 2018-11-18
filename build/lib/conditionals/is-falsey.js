"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
class IsFalsey extends conditional_1.Conditional {
    test(value) {
        return !value;
    }
}
exports.IsFalsey = IsFalsey;
exports.isFalseyInstance = new IsFalsey();
function isFalsey(value) {
    return exports.isFalseyInstance.test(value);
}
exports.isFalsey = isFalsey;
function assert_isFalsey(value, assertMsg = "is not falsey.") {
    conditional_1.assert_conditional(value, exports.isFalseyInstance, assertMsg);
}
exports.assert_isFalsey = assert_isFalsey;
//# sourceMappingURL=is-falsey.js.map