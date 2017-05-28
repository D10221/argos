
import { KeyValue } from "./types";
import { isNullOrUndefined as isNull } from "util";

export const Flags = (list: KeyValue[]) => {

    return (key: string) => {
       
        const found = (list.find(x => x.key === key));

        const exists = () =>{
            return !isNull(found);
        }

        const hasValue = (): boolean => {
            return  exists() && !isNull(found.value)
        };

        const toString = (defaultValue?: string): string => {
            return exists() ? 
                (Array.isArray(found.value)) ?
                    found.value.map(x => `${x}`).join(" ")
                    :`${found.value}`
                : defaultValue || "";
        };

        const toNumber = (defaultValue?: number): number => {
            return exists() && 
                typeof found.value === "number" ? found.value : defaultValue || Number.NaN;
        };

        /**
         *
         * @param key false defauls
         */
        const toBool = (defaultValue?: boolean): boolean => {
            return exists() &&
                typeof found.value === "boolean" ? found.value : defaultValue || false;
        };

        const toList = (defaultValue?: string[]): string[] => {
            if (!hasValue()) return defaultValue || [];
            if (Array.isArray(found.value)) {
                return found.value;
            }
            return  [`${found.value}`];
        };

        return {
            toString, toBool, toNumber, toList, hasValue, exists
        }
    }
}