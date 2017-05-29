export type KeyValueTypeKeys = "number" | "boolean" | "string" | "array";
export type KeyValueType = number | boolean | string | string[];
export interface KeyValue {
    key?: string;
    value?: KeyValueType;
}
export interface ArgDescription {
    key: string;
    displayName?: string;
    required?: boolean;
    type?: KeyValueTypeKeys;
}
