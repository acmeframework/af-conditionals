"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_1 = require("./comparison");
class LessThanOrEqual extends comparison_1.Comparison {
    test(value1, value2) {
        return super.test(value1, value2, comparison_1.COMPARE_LESS_THAN)
            || super.test(value1, value2, comparison_1.COMPARE_EQUAL);
    }
}
exports.LessThanOrEqual = LessThanOrEqual;
exports.lte = new LessThanOrEqual();
//# sourceMappingURL=lte.js.map