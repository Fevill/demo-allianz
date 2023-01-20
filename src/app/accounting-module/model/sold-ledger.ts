import { AccountLedger } from "./account-ledger";

export interface SoldLedger {
    sold: number;
    debit: AccountLedger;
    credit: AccountLedger;
}