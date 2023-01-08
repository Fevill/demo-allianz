import { Person } from "./person";

export interface Squad {
    backEnd?:Person[];
    description?:string;
    frontEnd?:Person[];
    id:string;
    name:string;
    productOwner?:Person;
}