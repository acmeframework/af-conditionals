"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
const is_usable_1 = require("./is-usable");
class IsFunction extends conditional_1.Conditional {
    constructor(newAssertMsg = "is not a function.") {
        super(newAssertMsg);
    }
    test(value) {
        return is_usable_1.isUsable.test(value) &&
            typeof value === "function";
    }
}
exports.IsFunction = IsFunction;
exports.isFunction = new IsFunction();
//# sourceMappingURL=is-function.js.map