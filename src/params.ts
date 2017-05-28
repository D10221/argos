import { isNullOrUndefined as isNull } from "util";
import { reduce } from "./reduce";
import { KeyValue } from "./types";

export const Params = (list: KeyValue[])=>{
    
    let _values: any;
    const values: any = () => _values ? _values : (_values = reduce(list));

    const toString = (): string => {
        const value = (list.find(x => x.key === "_") || {}).value;
        return typeof value === "string" ? value : "";
    };

    const toNumber = (): number => {
        const value = (list.find(x => x.key === "_") || {}).value;
        return typeof value === "number" ? value : Number.NaN;
    };

    const toBool = (): boolean => {
        const value = (list.find(x => x.key === "_") || {}).value;
        return typeof value === "boolean" ? value : false;
    };

    const toList = (): string[] => {
        const found = list.find(x => x.key === "_");
        if (isNull(found)) {
            return [];
        }
        if (Array.isArray(found.value)) return found.value;
        return [`${found.value}`];
    };  

    return () => (
        {
            toString, toNumber, toBool, toList, values
        }
    )
}