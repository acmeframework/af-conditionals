"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
const is_undefined_or_null_1 = require("./is-undefined-or-null");
class IsUsable extends conditional_1.Conditional {
    test(value) {
        return !is_undefined_or_null_1.isUndefinedOrNull(value);
    }
}
exports.IsUsable = IsUsable;
exports.isUsableInstance = new IsUsable();
function isUsable(value) {
    return exports.isUsableInstance.test(value);
}
exports.isUsable = isUsable;
function assert_isUsable(value, assertMsg = "is not usable (it is undefined or null).") {
    conditional_1.assert_conditional(value, exports.isUsableInstance, assertMsg);
}
exports.assert_isUsable = assert_isUsable;
//# sourceMappingURL=is-usable.js.map