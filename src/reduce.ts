import { KeyValue } from "./types";

/**
 *
 * @summary reduce KeyValue[] to {} from "_" key
 */
export const reduce = ($args: KeyValue[]): any => {
    return $args.reduce((acc, keyValue) => {
        (acc as any)[(keyValue.key || "_")] = keyValue.value;
        return acc;
    }, {});
};