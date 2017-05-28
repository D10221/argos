"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const args_query_1 = require("../args-query");
describe("args query", () => {
    it("confirm exists", () => {
        assert.ok(args_query_1.ArgsQuery(["--xyz"]).getFlag("xyz").exists());
    });
    it("confirm not exists", () => {
        assert.ok(!args_query_1.ArgsQuery(["--xyzx"]).getFlag("xyz").exists());
    });
    it("reads as string a list", () => {
        assert.equal(args_query_1.ArgsQuery(["--x", "1", "2", "3"]).getFlag("x").toString(), "1 2 3");
    });
    it("default to string empty", () => {
        assert.equal(args_query_1.ArgsQuery([]).getFlag("x").toString(), "");
    });
    it("use provided defaut string value", () => {
        assert.equal(args_query_1.ArgsQuery([]).getFlag("x").toString("?"), "?");
    });
});
//# sourceMappingURL=query.test.js.map