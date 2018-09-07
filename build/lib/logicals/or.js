"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditionals_1 = require("../conditionals");
const logical_1 = require("./logical");
class Or extends logical_1.Logical {
    constructor(newAssertMsg = "The operands when OR'd together are not true.") {
        super(newAssertMsg);
    }
    stopTesting(result) {
        return result;
    }
    _test(lhsValue, lhs, rhsValue, rhs) {
        return (conditionals_1.isUsable.test(lhs) ? lhs.test(lhsValue) : lhsValue)
            || rhs.test(rhsValue);
    }
}
exports.Or = Or;
exports.or = new Or();
//# sourceMappingURL=or.js.map