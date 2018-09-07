import { COMPARE_EQUAL, COMPARE_GREATER_THAN, Comparison } from "./comparison";

export class GreaterThanOrEqual extends Comparison {

    public test(value1: any, value2: any): boolean {
        return super.test(value1, value2, COMPARE_GREATER_THAN)
            || super.test(value1, value2, COMPARE_EQUAL);
    }
}

export let gte = new GreaterThanOrEqual();
