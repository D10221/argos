import { parse } from "./parse";
import { reduce } from "./reduce";
import { Flags } from "./flags";
import { Params } from "./params";
import { KeyValueTypeKeys, KeyValue, ArgDescription } from "./types";

const isType = (type: KeyValueTypeKeys, x?: KeyValue) => {
    return x && typeof x.value === type;
};
/**
 * @summary argv query fty
 * @param argv {string[]} - optional - @default process.argv.slice(2)
 * @param expected {ArgDescription[]} - TODO: validation/defintion
 * @returns args querry
 */
export const ArgsQuery = (argv?: string[], expected?: ArgDescription[]) => {

    const list = parse(argv || process.argv.slice(2));

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

    let _values: any;
    const values: any = () => _values ? _values : (_values = reduce(list));

    const getFlag = Flags(list);
    const params = Params(list);
    return {
        list,
        values,
        getFlag,
        params,
    };
};
