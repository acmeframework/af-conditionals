"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditionals_1 = require("../conditionals");
class Logical {
    constructor(assertMsg) {
        this.assertMsg = assertMsg;
    }
    assert(operands) {
        if (!this.test(operands)) {
            throw new TypeError(this.assertMsg);
        }
    }
    test(operands) {
        if (!conditionals_1.isArray.test(operands) || operands.length < 2) {
            throw new TypeError("A logical test requires at least two operands to test.");
        }
        if (!conditionals_1.isUsable.test(operands[0].value)) {
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
//# sourceMappingURL=logical.js.map