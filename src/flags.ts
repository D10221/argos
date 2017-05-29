
import { KeyValue } from "./types";
import { isNullOrUndefined as isNull } from "util";

/**
 * @summary Fty
 * @param list
 */
export const Flags = (list: KeyValue[]) => {

    /**
     * @summary keyValue helper, retrieve list value of 'key'
     */
    return (key: string) => {

        const found = (list.find(x => x.key === key));

        /**
         * key exists
         */
        const exists = () => {
            return !isNull(found);
        };
        /**
         * @returns {boolean} key exists and has value
         */
        const hasValue = (): boolean => {
            return exists() && !isNull(found.value);
        };

        /**
         * @return {string} key value  - or provided default value
         * @param  {string} defaultValue - optional - to @return if not exists
         */
        const toString = (defaultValue?: string): string => {
            return exists() ?
                (Array.isArray(found.value)) ?
                    found.value.map(x => `${x}`).join(" ")
                    : `${found.value}`
                : defaultValue || "";
        };

        /**
         *
         * @param defaultValue {number} to return if not found or not a 'number'
         * @returns {Number} NaN - if not found or not a number
         */
        const toNumber = (defaultValue?: number): number => {
            return exists() &&
                typeof found.value === "number" ? found.value : defaultValue || Number.NaN;
        };

        /**
         *
         * @param key {string}
         * @returns {boolean} false if not found or not boolean
         */
        const toBool = (defaultValue?: boolean): boolean => {
            return exists() &&
                typeof found.value === "boolean" ? found.value : defaultValue || false;
        };

        /**
         *
         * @param defaultValue {list} - if value is not a list return list with a value
         */
        const toList = (defaultValue?: string[]): string[] => {
            if (!hasValue()) return defaultValue || [];
            if (Array.isArray(found.value)) {
                return found.value;
            }
            return [`${found.value}`];
        };

        return {
            toString,
            toBool,
            toNumber,
            toList,
            hasValue,
            exists
        };
    };
};