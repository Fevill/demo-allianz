import { EnumType } from "./enum-type";
import { Tcolumn } from "./Tcolumn";

export interface Theader {
    columns: Tcolumn[],
    isShow?:boolean
}