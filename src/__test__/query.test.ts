import * as assert from "assert";
import { ArgsQuery } from "../args-query";
describe("args query", () => {
    it("works", () => {
        assert.ok(ArgsQuery(["--xyz"]).getFlag("xyz").exists());
    });
    it("reads as string a list", () => {
        assert.equal(
            ArgsQuery(["--x", "1", "2", "3"]).getFlag("x").toString(),
            "1 2 3"
        )
         assert.equal(
            ArgsQuery([]).getFlag("x").toString(),
            ""
        )
         assert.equal(
            ArgsQuery([]).getFlag("x").toString("?"),
            "?"
        )
    })
});