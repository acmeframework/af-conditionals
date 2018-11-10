"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditionals_1 = require("../conditionals");
class Logical {
    test(operands) {
        if (!conditionals_1.isArray(operands) || operands.length < 2) {
            throw new TypeError("A logical test requires at least two operands to test.");
        }
        if (!conditionals_1.isUsable(operands[0].value)) {
            throw new TypeError("You must supply at least one usable values to test.");
        }
        const defaultValue = operands[0].value;
        let result = this._test(operands[0].value, operands[0].condition, operands[1].value || defaultValue, operands[1].condition);
        let i = 2;
        while (!this.stopTesting(result) && i < operands.length) {
            result = this._test(result, undefined, operands[i].value || defaultValue, operands[i].condition);
            i++;
        }
        return result;
    }
    stopTesting(result) {
        return !result;
    }
}
exports.Logical = Logical;
function assert_logical(operands, l, assertMsg = "Your logical assertion is not true.") {
    if (!l.test(operands)) {
        throw new TypeError(assertMsg);
    }
}
exports.assert_logical = assert_logical;
//# sourceMappingURL=logical.js.map