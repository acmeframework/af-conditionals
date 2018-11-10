"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
class IsArray extends conditional_1.Conditional {
    test(value) {
        return typeof value !== "undefined" &&
            value !== null &&
            Object.prototype.toString.call(value) === "[object Array]";
    }
}
exports.IsArray = IsArray;
exports.isArrayInstance = new IsArray();
function isArray(value) {
    return exports.isArrayInstance.test(value);
}
exports.isArray = isArray;
function assert_isArray(value, assertMsg = "is not an array.") {
    conditional_1.assert_conditional(value, exports.isArrayInstance, assertMsg);
}
exports.assert_isArray = assert_isArray;
//# sourceMappingURL=is-array.js.map