"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const util = require("util");
const parse_1 = require("../parse");
describe("args: parse", () => {
    it("works", () => {
        assert.equal(parse_1.parse(["--x", "1"]).filter(x => x.key === "x")[0].value, 1);
        assert.equal(parse_1.parse(["-x", "1"]).filter(x => x.key === "x")[0].value, 1);
        assert.equal(parse_1.parse(["--x", "1"]).filter(x => x.key === "x")[0].value, 1);
        assert.equal(parse_1.parse(["x=1"]).filter(x => x.key === "x")[0].value, 1);
        assert.equal(parse_1.parse(["x=x1"]).filter(x => x.key === "x")[0].value, "x1");
        assert.equal(parse_1.parse(["-x", "true"]).filter(x => x.key === "x")[0].value, true);
        assert.equal(parse_1.parse(["x=true"]).filter(x => x.key === "x")[0].value, true);
        assert.equal(parse_1.parse(["x=false"]).filter(x => x.key === "x")[0].value, false);
        assert.equal(parse_1.parse(["x=false"]).filter(x => x.key === "x")[0].value, false);
        try {
            parse_1.parse(["--x", "--x"]).filter(x => x.key === "x");
            assert.ok(false, "this line Should be unreachable");
        }
        catch (e) {
            assert.equal(e.message, "too many 'x'");
        }
        try {
            parse_1.parse(["-x", "--x"]).filter(x => x.key === "x");
            assert.ok(false, "this line Should be unreachable");
        }
        catch (e) {
            assert.equal(e.message, "too many 'x'");
        }
        try {
            parse_1.parse(["--x", "-x"]).filter(x => x.key === "x");
            assert.ok(false, "this line Should be unreachable");
        }
        catch (e) {
            assert.equal(e.message, "too many 'x'");
        }
        try {
            parse_1.parse(["--x", "x=1"]).filter(x => x.key === "x");
            assert.ok(false, "this line Should be unreachable");
        }
        catch (e) {
            assert.equal(e.message, "too many 'x'");
        }
        const found = parse_1.parse(["1", "A", "false"]).find(x => x.key === "_");
        if (util.isNullOrUndefined(found)) {
            throw new Error("Not Found");
        }
        if (!Array.isArray(found.value)) {
            throw new Error("Not Array");
        }
        assert.equal(found.value.reduce((a, b) => a + "," + b), "1,A,false");
    });
});
//# sourceMappingURL=parse.test.js.map