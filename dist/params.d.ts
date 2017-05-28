import { KeyValue } from "./types";
export declare const Params: (list: KeyValue[]) => () => {
    toString: () => string;
    toNumber: () => number;
    toBool: () => boolean;
    toList: () => string[];
    values: any;
};
