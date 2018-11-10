"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_1 = require("./comparison");
class Equal extends comparison_1.Comparison {
    test(value1, value2) {
        return super.test(value1, value2, [comparison_1.COMPARE_EQUAL]);
    }
}
exports.Equal = Equal;
exports.eqInstance = new Equal();
function eq(value1, value2) {
    return exports.eqInstance.test(value1, value2);
}
exports.eq = eq;
function assert_eq(value1, value2, assertMsg) {
    comparison_1.assert_comparison(value1, value2, exports.eqInstance, [comparison_1.COMPARE_EQUAL], assertMsg);
}
exports.assert_eq = assert_eq;
//# sourceMappingURL=eq.js.map