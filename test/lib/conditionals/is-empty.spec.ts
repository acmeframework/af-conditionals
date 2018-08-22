import { isEmpty } from "../../../src/lib";
import { TestConditional } from "./conditional-tests";

const testItemsResultsMap = [
    false, // string
    true,  // empty string
    false, // number
    true,  // empty number
    false, // boolean
    false, // object
    false, // function
    false, // array
    true,  // undefined
    true   // null
];

describe("IsEmpty class", function() {

    describe("tests various values to determine if IsEmpty functions properly...", function() {
        const tc = new TestConditional("isEmpty", isEmpty, testItemsResultsMap);
        tc.test();
    });
});
