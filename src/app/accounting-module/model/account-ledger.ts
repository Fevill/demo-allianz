import { LedgerRow } from "./ledger-row";

export interface AccountLedger {
    total: number;
    offset: number;
    ledgerRow: LedgerRow[]
}