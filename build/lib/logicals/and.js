"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditionals_1 = require("../conditionals");
const logical_1 = require("./logical");
class And extends logical_1.Logical {
    constructor(newAssertMsg = "The operands when AND'd together are not true") {
        super(newAssertMsg);
    }
    _test(lhsValue, lhs, rhsValue, rhs) {
        return (conditionals_1.isUsable.test(lhs) ? lhs.test(lhsValue) : lhsValue)
            && rhs.test(rhsValue);
    }
}
exports.And = And;
exports.and = new And();
//# sourceMappingURL=and.js.map