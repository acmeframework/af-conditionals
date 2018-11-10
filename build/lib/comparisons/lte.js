"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_1 = require("./comparison");
class LessThanOrEqual extends comparison_1.Comparison {
    test(value1, value2) {
        return super.test(value1, value2, [comparison_1.COMPARE_LESS_THAN, comparison_1.COMPARE_EQUAL]);
    }
}
exports.LessThanOrEqual = LessThanOrEqual;
exports.lteInstance = new LessThanOrEqual();
function lte(value1, value2) {
    return exports.lteInstance.test(value1, value2);
}
exports.lte = lte;
function assert_lte(value1, value2, assertMsg) {
    comparison_1.assert_comparison(value1, value2, exports.lteInstance, [comparison_1.COMPARE_LESS_THAN, comparison_1.COMPARE_EQUAL], assertMsg);
}
exports.assert_lte = assert_lte;
//# sourceMappingURL=lte.js.map