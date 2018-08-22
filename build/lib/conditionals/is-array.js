"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
class IsArray extends conditional_1.Conditional {
    constructor(newAssertMsg = "is not an array.") {
        super(newAssertMsg);
    }
    test(value) {
        return typeof value !== "undefined" &&
            value !== null &&
            Object.prototype.toString.call(value) === "[object Array]";
    }
}
exports.IsArray = IsArray;
exports.isArray = new IsArray();
//# sourceMappingURL=is-array.js.map