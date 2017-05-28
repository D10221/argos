"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
exports.Flags = (list) => {
    return (key) => {
        const found = (list.find(x => x.key === key));
        const exists = () => {
            return !util_1.isNullOrUndefined(found);
        };
        const hasValue = () => {
            return exists() && !util_1.isNullOrUndefined(found.value);
        };
        const toString = (defaultValue) => {
            return exists() ?
                (Array.isArray(found.value)) ?
                    found.value.map(x => `${x}`).join(" ")
                    : `${found.value}`
                : defaultValue || "";
        };
        const toNumber = (defaultValue) => {
            return exists() &&
                typeof found.value === "number" ? found.value : defaultValue || Number.NaN;
        };
        /**
         *
         * @param key false defauls
         */
        const toBool = (defaultValue) => {
            return exists() &&
                typeof found.value === "boolean" ? found.value : defaultValue || false;
        };
        const toList = (defaultValue) => {
            if (!hasValue())
                return defaultValue || [];
            if (Array.isArray(found.value)) {
                return found.value;
            }
            return [`${found.value}`];
        };
        return {
            toString, toBool, toNumber, toList, hasValue, exists
        };
    };
};
//# sourceMappingURL=flags.js.map