"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const parse_1 = require("../parse");
const reduce_1 = require("../reduce");
describe("args: reduce", () => {
    it("works", () => {
        const _ = reduce_1.reduce(parse_1.parse([
            "a", "b",
            "--xx",
            "--y",
            "--z", "1",
            "-w", "true",
            "-n", "false",
            "-x", "h",
            "-xxx", "1", "x", "true"
        ]));
        assert.equal(_._.join(), ["a", "b"].join());
        assert.equal(_.xx, true);
        assert.equal(_.y, true);
        assert.equal(_.z, 1);
        assert.equal(_.w, true);
        assert.equal(_.n, false);
        assert.equal(_.x, "h");
        assert.equal(_.xxx.join(), ["1", "x", "true"].join());
        assert.ok(true);
    });
});
//# sourceMappingURL=reduce.test.js.map