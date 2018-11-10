"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditional_1 = require("./conditional");
const is_number_1 = require("./is-number");
const is_string_1 = require("./is-string");
const is_usable_1 = require("./is-usable");
class IsEmpty extends conditional_1.Conditional {
    test(value) {
        if (!is_usable_1.isUsable(value))
            return true;
        if (is_string_1.isString(value)) {
            return this.isStringEmpty(value);
        }
        else if (is_number_1.isNumber(value)) {
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
exports.isEmptyInstance = new IsEmpty();
function isEmpty(value) {
    return exports.isEmptyInstance.test(value);
}
exports.isEmpty = isEmpty;
function assert_isEmpty(value, assertMsg = "is not empty.") {
    conditional_1.assert_conditional(value, exports.isEmptyInstance, assertMsg);
}
exports.assert_isEmpty = assert_isEmpty;
//# sourceMappingURL=is-empty.js.map