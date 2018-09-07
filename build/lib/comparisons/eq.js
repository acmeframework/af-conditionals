"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_1 = require("./comparison");
class Equal extends comparison_1.Comparison {
    test(value1, value2) {
        return super.test(value1, value2, comparison_1.COMPARE_EQUAL);
    }
}
exports.Equal = Equal;
exports.eq = new Equal();
//# sourceMappingURL=eq.js.map