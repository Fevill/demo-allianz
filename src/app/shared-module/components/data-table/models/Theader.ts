import { EnumType } from "./enum-type";

export interface Theader {
    label:string,
    display:string,
    dataType?: EnumType,
    dataFormater?:string
}