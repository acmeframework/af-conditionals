"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
class IsNumber extends conditional_1.Conditional {
    test(value) {
        return typeof value === "number";
    }
}
exports.IsNumber = IsNumber;
exports.isNumberInstance = new IsNumber();
function isNumber(value) {
    return exports.isNumberInstance.test(value);
}
exports.isNumber = isNumber;
function assert_isNumber(value, assertMsg = "is not a number.") {
    conditional_1.assert_conditional(value, exports.isNumberInstance, assertMsg);
}
exports.assert_isNumber = assert_isNumber;
//# sourceMappingURL=is-number.js.map