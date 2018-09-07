import { Comparison } from "./comparison";
export declare class Equal extends Comparison {
    test(value1: any, value2: any): boolean;
}
export declare let eq: Equal;
