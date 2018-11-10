"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
class IsString extends conditional_1.Conditional {
    test(value) {
        return typeof value === "string";
    }
}
exports.IsString = IsString;
exports.isStringInstance = new IsString();
function isString(value) {
    return exports.isStringInstance.test(value);
}
exports.isString = isString;
function assert_isString(value, assertMsg = "is not a string.") {
    conditional_1.assert_conditional(value, exports.isStringInstance, assertMsg);
}
exports.assert_isString = assert_isString;
//# sourceMappingURL=is-string.js.map