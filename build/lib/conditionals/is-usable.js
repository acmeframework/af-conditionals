"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
const is_undefined_or_null_1 = require("./is-undefined-or-null");
class IsUsable extends conditional_1.Conditional {
    constructor(newAssertMsg = "is not usable (it is undefined or null).") {
        super(newAssertMsg);
    }
    test(value) {
        return !is_undefined_or_null_1.isUndefinedOrNull.test(value);
    }
}
exports.IsUsable = IsUsable;
exports.isUsable = new IsUsable();
//# sourceMappingURL=is-usable.js.map