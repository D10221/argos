import { isNullOrUndefined as _isNull } from "util";
import { reduce } from "./reduce";
import { KeyValue } from "./types";

/**
 * @summary value retriever helper for "_" key in List
 * @param list {KeyValue[]} - list of {key,value} 
 */
export const Params = (list: KeyValue[]) => {

    let _values: any;
    const values: any = () => _values ? _values : (_values = reduce(list));
    const value = (list.find(x => x.key === "_") || {}).value;

    const isNull = _isNull(value);

    /**
     * 
     * @returns  {List<string>} - empty if null, if array return space separated list items as one string
     */
    const toString = (): string => {
        return isNull ? "" :
            Array.isArray(value) ? value.join(" ") : `${value}`;
    };

    /**
     * @returns {Number} @default {NaN} if not number
     */
    const toNumber = (): number => {
        return typeof value === "number" ? value : Number.NaN;
    };

    /**
     * @return {boolean} false if not boolean
     */
    const toBool = (): boolean => {
        return typeof value === "boolean" ? value : false;
    };

    /**
     * 
     * @returns {List<string>} value/values to list
     */
    const toList = (): string[] => {
        return (isNull) ? [] :
            (Array.isArray(value)) ? value :
                [`${value}`];
    };

    return  {
        toString, toNumber, toBool, toList, values, isNull
    };
}