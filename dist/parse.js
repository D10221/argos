"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xCase = (x) => {
    return x.replace(/-+(\w)/, (_, n) => n.toUpperCase());
};
const clean = (x) => {
    return xCase(x.replace(/^-+/, ""));
};
/**
 * negatives?
 */
const isNumber = (x) => {
    return /^\d+(\.\d+)?$/.test(x);
};
const isBoolean = (x) => {
    return /(true|false)/i.test(x);
};
const convert = (x) => {
    return isNumber(x) ? Number.parseFloat(x) :
        (isBoolean(x) ? x.toLowerCase() === "true" : x);
};
const isFlag = (x) => /^\-.*/.test(x);
exports.parse = (args) => {
    const empty = "_";
    let prevKey = empty;
    const result = [];
    const add = (key, value) => {
        result.push({ key, value: convert(value) });
    };
    for (let i = 0; i < args.length; i++) {
        const value = args[i];
        // flags
        if (isFlag(value)) {
            prevKey = clean(value);
            if (result.find(x => x.key === prevKey)) {
                throw new Error(`too many '${prevKey}'`);
            }
            const next = args[i + 1];
            if (isFlag(next) ||
                // last
                i === args.length - 1 ||
                // parameter group
                next.indexOf("=") !== -1) {
                // set default value, ust present
                result.push({ key: prevKey, value: true });
            }
            continue;
        }
        // parameter grouping
        if (value.indexOf("=") !== -1) {
            const parts = value.split("=");
            const key = clean(parts[0]);
            if (result.find(x => x.key === key)) {
                throw new Error(`too many '${key}'`);
            }
            add(key, parts[1]);
            prevKey = empty;
            continue;
        }
        // values
        const found = result.find(x => x.key === prevKey);
        if (found) {
            if (!Array.isArray(found.value)) {
                found.value = [`${found.value}`];
            }
            found.value.push(value);
            continue;
        }
        add(prevKey, value);
    }
    return result;
};
//# sourceMappingURL=parse.js.map