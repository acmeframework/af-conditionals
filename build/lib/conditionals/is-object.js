"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
const is_array_1 = require("./is-array");
const is_function_1 = require("./is-function");
const is_usable_1 = require("./is-usable");
class IsObject extends conditional_1.Conditional {
    constructor(newAssertMsg = "is not an object.") {
        super(newAssertMsg);
    }
    test(value) {
        return is_usable_1.isUsable.test(value) &&
            typeof value === "object" &&
            !is_function_1.isFunction.test(value) &&
            !is_array_1.isArray.test(value);
    }
}
exports.IsObject = IsObject;
exports.isObject = new IsObject();
//# sourceMappingURL=is-object.js.map