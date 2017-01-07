import {expressions} from "./reg";
export type TStringTypes = "email" | "ssn" | "GUID"

export function stringIs(str:string,type:TStringTypes):boolean{
        return  expressions[type] ? expressions[type].test(str.toLowerCase()) : false;
}