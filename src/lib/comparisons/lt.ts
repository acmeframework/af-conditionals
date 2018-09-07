import { COMPARE_LESS_THAN, Comparison } from "./comparison";

export class LessThan extends Comparison {

    public test(value1: any, value2: any): boolean {
        return super.test(value1, value2, COMPARE_LESS_THAN);
    }
}

export let lt = new LessThan();
