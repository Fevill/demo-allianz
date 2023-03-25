import { Component } from '@angular/core';
import { Account } from '../model/account';
import ACCOUNTS from '../../shared-module/constant/data/accounts.json';
import { EnumType } from 'src/app/shared-module/components/data-table/models/enum-type';
import { Theader } from 'src/app/shared-module/components/data-table/models/Theader';
import JOURNAL from '../../shared-module/constant/data/journal.json';
import { SoldOffset } from '../model/sold-offset';
import { DebitCredit } from '../model/debit-credit';
import { AccountLedger } from '../model/account-ledger';
import { SoldLedger } from '../model/sold-ledger';
import { LedgerRow } from '../model/ledger-row';

@Component({
  selector: 'ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent {

  accounts!: Account[];
  data = JOURNAL;
  soldLedger!: SoldLedger;
  account!: Account;

  headers: Theader= {
    isShow:true,
    columns: [
    { display: "Id", label: 'id' , width: '10%'},
    {
      display: "Date",
      label: 'dateOperation',
      dataType: EnumType.DATE,
      dataFormater: 'DD/MM/YYYY'
    },
    { display: "Label", label: 'label' },
    { display: "Montant", label: 'amount' },
  ]
}


  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accounts = ACCOUNTS;
  }

  searchAccount():void{
    this.getSoldLedger();
  }

  getSoldLedger(): void {
    let soldLedger = {
      sold: this.getSold().sold,
       debit: {
        total: this.getDebitOrCreditTotale(DebitCredit.CREDIT),
        ledgerRow: this.getDebitOrCredit(DebitCredit.CREDIT),
        offset: this.getSold().debitOffset
      } as AccountLedger,
      credit: {
        total: this.getDebitOrCreditTotale(DebitCredit.DEBIT),
        ledgerRow: this.getDebitOrCredit(DebitCredit.DEBIT),
        offset: this.getSold().creditOffset
      } as AccountLedger
    } as SoldLedger;

    this.soldLedger = soldLedger;
  }

  getDebitOrCredit(DebitOrCredit: DebitCredit): LedgerRow[] {
    return this.data
      .filter((jr) => jr[DebitOrCredit].id === this.account.id)
      .map((jr) => {
        let ledgerRow = {} as LedgerRow;
        ledgerRow.amount = jr.amount;
        ledgerRow.dateOperation = jr.dateOperation;
        ledgerRow.label = jr.label;
        ledgerRow.id = jr.id;
        return ledgerRow;
      })
  }

  getDebitOrCreditTotale(DebitOrCredit: DebitCredit): number {
    return this.getDebitOrCredit(DebitOrCredit)
      .reduce((prev, curr) => prev + curr.amount, 0)
  }

  getSold(): SoldOffset {
    let soldOffset:SoldOffset;
    let sold = this.getDebitOrCreditTotale(DebitCredit.DEBIT) - this.getDebitOrCreditTotale(DebitCredit.CREDIT)
    let debitOffset:number;
    let creditOffset:number;
    if(sold>0){
      debitOffset = Math.abs(sold)
      creditOffset = 0
    }else {
      debitOffset = 0
      creditOffset = Math.abs(sold)
    }
    soldOffset = {
      sold: Math.abs(sold),
      debitOffset,
      creditOffset
    } as SoldOffset

    return soldOffset;
  }

}
