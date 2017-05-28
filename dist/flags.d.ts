import { KeyValue } from "./types";
export declare const Flags: (list: KeyValue[]) => (key: string) => {
    toString: (defaultValue?: string) => string;
    toBool: (defaultValue?: boolean) => boolean;
    toNumber: (defaultValue?: number) => number;
    toList: (defaultValue?: string[]) => string[];
    hasValue: () => boolean;
    exists: () => boolean;
};
