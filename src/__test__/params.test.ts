import { Params } from "../params";
import * as assert from "assert";

describe("params", () => {
    it("works", () => {
        assert.equal(
             Params([{key: "_", value: "1"}]).toString() ,
             "1"
        );
        assert.ok(Number.isNaN( Params([{key: "_", value: "1"}]).toNumber()));
    });
});