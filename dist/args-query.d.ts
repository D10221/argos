import { KeyValueTypeKeys, KeyValue } from "./types";
export interface ArgDescription {
    key: string;
    displayName?: string;
    required?: boolean;
    type?: KeyValueTypeKeys;
}
export declare const ArgsQuery: (argv?: string[], expected?: ArgDescription[]) => {
    list: KeyValue[];
    values: any;
    getFlag: (key: string) => {
        toString: (defaultValue?: string) => string;
        toBool: (defaultValue?: boolean) => boolean;
        toNumber: (defaultValue?: number) => number;
        toList: (defaultValue?: string[]) => string[];
        hasValue: () => boolean;
        exists: () => boolean;
    };
    params: () => {
        toString: () => string;
        toNumber: () => number;
        toBool: () => boolean;
        toList: () => string[];
        values: any;
    };
};
