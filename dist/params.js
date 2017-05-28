"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const reduce_1 = require("./reduce");
exports.Params = (list) => {
    let _values;
    const values = () => _values ? _values : (_values = reduce_1.reduce(list));
    const toString = () => {
        const value = (list.find(x => x.key === "_") || {}).value;
        return typeof value === "string" ? value : "";
    };
    const toNumber = () => {
        const value = (list.find(x => x.key === "_") || {}).value;
        return typeof value === "number" ? value : Number.NaN;
    };
    const toBool = () => {
        const value = (list.find(x => x.key === "_") || {}).value;
        return typeof value === "boolean" ? value : false;
    };
    const toList = () => {
        const found = list.find(x => x.key === "_");
        if (util_1.isNullOrUndefined(found)) {
            return [];
        }
        if (Array.isArray(found.value))
            return found.value;
        return [`${found.value}`];
    };
    return () => ({
        toString, toNumber, toBool, toList, values
    });
};
//# sourceMappingURL=params.js.map