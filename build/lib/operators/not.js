"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unary_operator_1 = require("./unary-operator");
class Not extends unary_operator_1.UnaryOperator {
    apply(value) {
        return !value;
    }
}
exports.Not = Not;
exports.not = new Not();
//# sourceMappingURL=not.js.map