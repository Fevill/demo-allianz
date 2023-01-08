import { PersonRole } from "./persone-role";

export interface Person {
    country:string;
    firstname:string;
    id:string;
    lastname:string;
    role:PersonRole;
}