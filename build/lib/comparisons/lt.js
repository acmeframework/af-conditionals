"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_1 = require("./comparison");
class LessThan extends comparison_1.Comparison {
    test(value1, value2) {
        return super.test(value1, value2, [comparison_1.COMPARE_LESS_THAN]);
    }
}
exports.LessThan = LessThan;
exports.ltInstance = new LessThan();
function lt(value1, value2) {
    return exports.ltInstance.test(value1, value2);
}
exports.lt = lt;
function assert_lt(value1, value2, assertMsg) {
    comparison_1.assert_comparison(value1, value2, exports.ltInstance, [comparison_1.COMPARE_LESS_THAN], assertMsg);
}
exports.assert_lt = assert_lt;
//# sourceMappingURL=lt.js.map