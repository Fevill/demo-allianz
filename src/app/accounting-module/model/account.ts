import { Category } from "./category";
import { Patrimoine } from "./patrimoine";
import { TypeAccount } from "./type-account";

export interface Account {   
    category?:string|Category|undefined;
    id:string,
    name: string;
    number:string;
    patrimoine?:string|Patrimoine|undefined;
    typeId: string;
} 
