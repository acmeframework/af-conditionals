"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
const is_array_1 = require("./is-array");
const is_function_1 = require("./is-function");
const is_usable_1 = require("./is-usable");
class IsObject extends conditional_1.Conditional {
    test(value) {
        return is_usable_1.isUsable(value) &&
            typeof value === "object" &&
            !is_function_1.isFunction(value) &&
            !is_array_1.isArray(value);
    }
}
exports.IsObject = IsObject;
exports.isObjectInstance = new IsObject();
function isObject(value) {
    return exports.isObjectInstance.test(value);
}
exports.isObject = isObject;
function assert_isObject(value, assertMsg = "is not an Object.") {
    conditional_1.assert_conditional(value, exports.isObjectInstance, assertMsg);
}
exports.assert_isObject = assert_isObject;
//# sourceMappingURL=is-object.js.map