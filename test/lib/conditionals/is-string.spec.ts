import { isStringInstance } from "../../../src/lib";
import { TestConditional } from "./conditional-tests";

const testItemsResultsMap = [
    true,  // string
    true,  // empty string
    false, // number
    false, // empty number
    false, // boolean
    false, // object
    false, // function
    false, // array
    false, // undefined
    false  // null
];

describe("IsString class", function() {

    describe("tests various values to determine if IsString functions "
        + "properly...",
        function() {
            const tc = new TestConditional(
                "isString",
                isStringInstance,
                testItemsResultsMap
            );
            tc.test();
        });
});
