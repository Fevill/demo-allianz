import { Category } from "./category";
import { Patrimoine } from "./patrimoine";
import { TypeAccount } from "./type-account";

export interface Account {   
    category?:Category;
    id:string,
    name: string;
    number:string;
    patrimoine?:Patrimoine;
    typeId: string;
} 
