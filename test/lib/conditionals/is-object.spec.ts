import { isObjectInstance } from "../../../src/lib";
import { TestConditional } from "./conditional-tests";

const testItemsResultsMap = [
    false, // string
    false, // empty string
    false, // number
    false, // empty number
    false, // boolean
    true,  // object
    false, // function
    false, // array
    false, // undefined
    false  // null
];

describe("IsObject class", function() {
    describe("tests various values to determine if IsObject functions "
        + "properly...",
        function() {
            const tc = new TestConditional(
                "isObject",
                isObjectInstance,
                testItemsResultsMap
            );
            tc.test();
        });
});
