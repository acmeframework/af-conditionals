import { COMPARE_EQUAL, Comparison } from "./comparison";

export class Equal extends Comparison {

    public test(value1: any, value2: any): boolean {
        return super.test(value1, value2, COMPARE_EQUAL);
    }
}

export let eq = new Equal();
