import { isNumberInstance } from "../../../src/lib";
import { TestConditional } from "./conditional-tests";

const testItemsResultsMap = [
    false, // string
    false, // empty string
    true,  // number
    true,  // empty number
    false, // boolean
    false, // object
    false, // function
    false, // array
    false, // undefined
    false  // null
];

describe("IsNumber class", function() {

    describe("tests various values to determine if IsNumber functions "
        + "properly...",
        function() {
            const tc = new TestConditional(
                "isNumber",
                isNumberInstance,
                testItemsResultsMap
            );
            tc.test();
        });
});
