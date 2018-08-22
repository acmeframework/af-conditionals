import { isUndefinedOrNull } from "../../../src/lib";
import { TestConditional } from "./conditional-tests";

const testItemsResultsMap = [
    false, // string
    false, // empty string
    false, // number
    false, // empty number
    false, // boolean
    false, // object
    false, // function
    false, // array
    true,  // undefined
    true   // null
];

describe("IsUndefinedOrNull class", function() {

    describe("tests various values to determine if IsUndefinedOrNull functions properly...", function() {
        const tc = new TestConditional("isUndefinedOrNull", isUndefinedOrNull, testItemsResultsMap);
        tc.test();
    });
});
