import { Person } from "./person";
import { Squad } from "./squad";
import { TribeManagement } from "./tribe-management";

export interface Program {
    description?:string;
    id:string;
    name:string;
    productManager?:Person[];
    scrumMaster?:Person[];
    squadList?:Squad[];
    startDate?:string;
    teamLeader:Person[];
    tribeManagement:TribeManagement;
}