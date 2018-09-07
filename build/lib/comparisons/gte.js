"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_1 = require("./comparison");
class GreaterThanOrEqual extends comparison_1.Comparison {
    test(value1, value2) {
        return super.test(value1, value2, comparison_1.COMPARE_GREATER_THAN)
            || super.test(value1, value2, comparison_1.COMPARE_EQUAL);
    }
}
exports.GreaterThanOrEqual = GreaterThanOrEqual;
exports.gte = new GreaterThanOrEqual();
//# sourceMappingURL=gte.js.map