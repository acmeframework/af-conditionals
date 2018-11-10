"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_1 = require("./comparison");
class GreaterThan extends comparison_1.Comparison {
    test(value1, value2) {
        return super.test(value1, value2, comparison_1.COMPARE_GREATER_THAN);
    }
}
exports.GreaterThan = GreaterThan;
exports.gtInstance = new GreaterThan();
function gt(value1, value2) {
    return exports.gtInstance.test(value1, value2);
}
exports.gt = gt;
function assert_gt(value1, value2, assertMsg) {
    comparison_1.assert_comparison(value1, value2, exports.gtInstance, [comparison_1.COMPARE_GREATER_THAN], assertMsg);
}
exports.assert_gt = assert_gt;
//# sourceMappingURL=gt.js.map