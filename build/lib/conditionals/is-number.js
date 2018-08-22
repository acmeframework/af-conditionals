"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
class IsNumber extends conditional_1.Conditional {
    constructor(newAssertMsg = "is not a number.") {
        super(newAssertMsg);
    }
    test(value) {
        return typeof value === "number";
    }
}
exports.IsNumber = IsNumber;
exports.isNumber = new IsNumber();
//# sourceMappingURL=is-number.js.map