"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
class IsString extends conditional_1.Conditional {
    constructor(newAssertMsg = "is not a string.") {
        super(newAssertMsg);
    }
    test(value) {
        return typeof value === "string";
    }
}
exports.IsString = IsString;
exports.isString = new IsString();
//# sourceMappingURL=is-string.js.map