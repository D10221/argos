"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse_1 = require("./parse");
const reduce_1 = require("./reduce");
const flags_1 = require("./flags");
const params_1 = require("./params");
const isType = (type, x) => {
    return x && typeof x.value === type;
};
exports.ArgsQuery = (argv, expected) => {
    const list = parse_1.parse(argv || process.argv.slice(2));
    if (expected) {
        for (const o of expected) {
            const found = list.find(x => x.key === o.key);
            if (o.required) {
                if (!found) {
                    throw new Error(`${o.displayName || o.key} is required`);
                }
            }
            if (found && o.type && !isType(o.type, found)) {
                throw new Error(`expected ${found.key} to be ${o.type}`);
            }
        }
    }
    let _values;
    const values = () => _values ? _values : (_values = reduce_1.reduce(list));
    const getFlag = flags_1.Flags(list);
    const params = params_1.Params(list);
    return {
        list,
        values,
        getFlag,
        params,
    };
};
//# sourceMappingURL=args-query.js.map