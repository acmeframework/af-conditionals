"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
class IsUndefinedOrNull extends conditional_1.Conditional {
    constructor(newAssertMsg = "is not undefined or null.") {
        super(newAssertMsg);
    }
    test(value) {
        return typeof value === "undefined" || value === null;
    }
}
exports.IsUndefinedOrNull = IsUndefinedOrNull;
exports.isUndefinedOrNull = new IsUndefinedOrNull();
//# sourceMappingURL=is-undefined-or-null.js.map