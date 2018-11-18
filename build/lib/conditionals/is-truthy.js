"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
class IsTruthy extends conditional_1.Conditional {
    test(value) {
        return !!value;
    }
}
exports.IsTruthy = IsTruthy;
exports.isTruthyInstance = new IsTruthy();
function isTruthy(value) {
    return exports.isTruthyInstance.test(value);
}
exports.isTruthy = isTruthy;
function assert_isTruthy(value, assertMsg = "is not truthy.") {
    conditional_1.assert_conditional(value, exports.isTruthyInstance, assertMsg);
}
exports.assert_isTruthy = assert_isTruthy;
//# sourceMappingURL=is-truthy.js.map