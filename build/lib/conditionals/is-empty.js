"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
const is_number_1 = require("./is-number");
const is_string_1 = require("./is-string");
const is_usable_1 = require("./is-usable");
class IsEmpty extends conditional_1.Conditional {
    constructor(newAssertMsg = "is not empty") {
        super(newAssertMsg);
    }
    test(value) {
        if (!is_usable_1.isUsable.test(value))
            return true;
        if (is_string_1.isString.test(value)) {
            return this.isStringEmpty(value);
        }
        else if (is_number_1.isNumber.test(value)) {
            return this.isNumberEmpty(value);
        }
        else {
            return !Boolean(value);
        }
    }
    isNumberEmpty(value) {
        return isNaN(value);
    }
    isStringEmpty(value) {
        return value === "";
    }
}
exports.IsEmpty = IsEmpty;
exports.isEmpty = new IsEmpty();
//# sourceMappingURL=is-empty.js.map