import { EnumType } from "./enum-type"

export interface Tcolumn {
    label:string,
    display:string,
    dataType?: EnumType,
    dataFormater?:string,
    width?:string;
}