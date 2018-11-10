"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
const is_usable_1 = require("./is-usable");
class IsFunction extends conditional_1.Conditional {
    test(value) {
        return is_usable_1.isUsable(value) &&
            typeof value === "function";
    }
}
exports.IsFunction = IsFunction;
exports.isFunctionInstance = new IsFunction();
function isFunction(value) {
    return exports.isFunctionInstance.test(value);
}
exports.isFunction = isFunction;
function assert_isFunction(value, assertMsg = "is not a Function.") {
    conditional_1.assert_conditional(value, exports.isFunctionInstance, assertMsg);
}
exports.assert_isFunction = assert_isFunction;
//# sourceMappingURL=is-function.js.map