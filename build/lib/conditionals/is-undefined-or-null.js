"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
class IsUndefinedOrNull extends conditional_1.Conditional {
    test(value) {
        return typeof value === "undefined" || value === null;
    }
}
exports.IsUndefinedOrNull = IsUndefinedOrNull;
exports.isUndefinedOrNullInstance = new IsUndefinedOrNull();
function isUndefinedOrNull(value) {
    return exports.isUndefinedOrNullInstance.test(value);
}
exports.isUndefinedOrNull = isUndefinedOrNull;
function assert_isUndefinedOrNull(value, assertMsg = "is not undefined or null.") {
    conditional_1.assert_conditional(value, exports.isUndefinedOrNullInstance, assertMsg);
}
exports.assert_isUndefinedOrNull = assert_isUndefinedOrNull;
//# sourceMappingURL=is-undefined-or-null.js.map