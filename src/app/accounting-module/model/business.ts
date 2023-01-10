import { Fiscalexercise } from "./fiscalexercise";

export interface Business {
    id:string,
    descripstion?:string;
    name: string;
    fiscalexercise?:Fiscalexercise
    fiscalexercises?: Fiscalexercise[]
} 