import {expressions, methods} from "./reg";
export type TStringTypes = "email" | "ssn" | "GUID"
interface StringConstructor {
    stringIs: string;
}
export class stringIsClass {
    constructor() {
        for (let k in methods) {
            this[k]=methods[k](expressions[k])
        }
        return this;
    }
}

export const stringIs = new stringIsClass()



