import { COMPARE_EQUAL, COMPARE_LESS_THAN, Comparison } from "./comparison";

export class LessThanOrEqual extends Comparison {

    public test(value1: any, value2: any): boolean {
        return super.test(value1, value2, COMPARE_LESS_THAN)
            || super.test(value1, value2, COMPARE_EQUAL);
    }
}

export let lte = new LessThanOrEqual();
