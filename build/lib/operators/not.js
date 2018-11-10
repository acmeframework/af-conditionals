"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unary_operator_1 = require("./unary-operator");
class Not extends unary_operator_1.UnaryOperator {
    apply(value) {
        return !value;
    }
}
exports.Not = Not;
exports.notInstance = new Not();
function not(value) {
    return exports.notInstance.apply(value);
}
exports.not = not;
//# sourceMappingURL=not.js.map