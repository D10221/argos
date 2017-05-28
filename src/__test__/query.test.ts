import * as assert from "assert";
import { ArgsQuery } from "../args-query";
describe("args query", () => {

    it("confirm exists", () => {
        assert.ok(ArgsQuery(["--xyz"]).getFlag("xyz").exists());
    });
    
    it("confirm not exists", () => {
        assert.ok(!ArgsQuery(["--xyzx"]).getFlag("xyz").exists());
    });

    it("reads as string a list", () => {
        assert.equal(
            ArgsQuery(["--x", "1", "2", "3"]).getFlag("x").toString(),
            "1 2 3"
        )

    })
    
    it("default to string empty", () => {
        assert.equal(
            ArgsQuery([]).getFlag("x").toString(),
            ""
        )
    })
    
    it("use provided defaut string value", () => {
        assert.equal(
            ArgsQuery([]).getFlag("x").toString("?"),
            "?"
        )
    });

});