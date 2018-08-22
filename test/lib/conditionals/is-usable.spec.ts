import { isUsable } from "../../../src/lib";
import { TestConditional } from "./conditional-tests";

const testItemsResultsMap = [
    true,  // string
    true,  // empty string
    true,  // number
    true,  // empty number
    true,  // boolean
    true,  // object
    true,  // function
    true,  // array
    false, // undefined
    false  // null
];

describe("IsUsable class", function() {

    describe("tests various values to determine if IsUsable functions properly...", function() {
        const tc = new TestConditional("isUsable", isUsable, testItemsResultsMap);
        tc.test();
    });
});
