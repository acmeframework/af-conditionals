import { isArray } from "../../../src/lib";
import { TestConditional } from "./conditional-tests";

const testItemsResultsMap = [
    false, // string
    false, // empty string
    false, // number
    false, // empty number
    false, // boolean
    false, // object
    false, // function
    true,  // array
    false, // undefined
    false  // null
];

describe("IsArray class", function() {
    describe("tests various values to determine if IsArry functions properly...", function() {
        const tc = new TestConditional("isArray", isArray, testItemsResultsMap);
        tc.test();
    });
});
