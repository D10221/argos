"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = ($args) => {
    return $args.reduce((acc, keyValue) => {
        acc[(keyValue.key || "_")] = keyValue.value;
        return acc;
    }, {});
};
//# sourceMappingURL=reduce.js.map