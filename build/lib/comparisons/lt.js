"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_1 = require("./comparison");
class LessThan extends comparison_1.Comparison {
    test(value1, value2) {
        return super.test(value1, value2, comparison_1.COMPARE_LESS_THAN);
    }
}
exports.LessThan = LessThan;
exports.lt = new LessThan();
//# sourceMappingURL=lt.js.map