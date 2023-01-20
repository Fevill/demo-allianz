import { Account } from "./account";

export interface JournalRow {
    id:string,
    label: string;
    dateCreation:string;
    credit:Account;
    debit:Account;
    tva?:number;
    amount:number;
    note?:string
} 