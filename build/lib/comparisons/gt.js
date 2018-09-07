"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_1 = require("./comparison");
class GreaterThan extends comparison_1.Comparison {
    test(value1, value2) {
        return super.test(value1, value2, comparison_1.COMPARE_GREATER_THAN);
    }
}
exports.GreaterThan = GreaterThan;
exports.gt = new GreaterThan();
//# sourceMappingURL=gt.js.map