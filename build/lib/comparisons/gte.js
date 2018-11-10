"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_1 = require("./comparison");
class GreaterThanOrEqual extends comparison_1.Comparison {
    test(value1, value2) {
        return super.test(value1, value2, [comparison_1.COMPARE_GREATER_THAN, comparison_1.COMPARE_EQUAL]);
    }
}
exports.GreaterThanOrEqual = GreaterThanOrEqual;
exports.gteInstance = new GreaterThanOrEqual();
function gte(value1, value2) {
    return exports.gteInstance.test(value1, value2);
}
exports.gte = gte;
function assert_gte(value1, value2, assertMsg) {
    comparison_1.assert_comparison(value1, value2, exports.gteInstance, [comparison_1.COMPARE_GREATER_THAN, comparison_1.COMPARE_EQUAL], assertMsg);
}
exports.assert_gte = assert_gte;
//# sourceMappingURL=gte.js.map