export declare type KeyValueTypeKeys = "number" | "boolean" | "string" | "array";
export declare type KeyValueType = number | boolean | string | string[];
export interface KeyValue {
    key?: string;
    value?: KeyValueType;
}
