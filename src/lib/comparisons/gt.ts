import { COMPARE_GREATER_THAN, Comparison } from "./comparison";

export class GreaterThan extends Comparison {

    public test(value1: any, value2: any): boolean {
        return super.test(value1, value2, COMPARE_GREATER_THAN);
    }
}

export let gt = new GreaterThan();
