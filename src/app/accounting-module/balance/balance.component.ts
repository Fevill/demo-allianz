import { Component } from '@angular/core';
import { Theader } from 'src/app/shared-module/components/data-table/models/Theader';
import JOURNAL from '../../shared-module/constant/data/journal.json';
import { Account } from '../model/account';
import ACCOUNTS from '../../shared-module/constant/data/accounts.json';
import { DebitCredit } from '../model/debit-credit';
import { AccountBalance } from '../model/account-balance';

@Component({
  selector: 'balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {

  accounts!: Account[];
  balance!:AccountBalance[];
  data = JOURNAL;

  headers: Theader[] = [
    { display: "Id", label: 'id' },
    { display: "Compte", label: 'account' },
    { display: "Débit", label: 'debit' },
    { display: "Crédit", label: 'credit' },
    { display: "Solde Débiteur", label: 'soldDebit' },
    { display: "Solde Créditeur", label: 'soldCredit' },
  ]

  ngOnInit(): void {
    this.getAccounts();
    this.balance = this.getBalance();
  }

  getAccounts(): void {
    this.accounts = ACCOUNTS;
  }

  getDebitOrCreditTotal(DebitOrCredit: DebitCredit,accountId:string): number {
    return this.data
      .filter((jr) => jr[DebitOrCredit].id === accountId)
      .reduce((prev, curr) => prev + curr.amount, 0)
  }

  getBalance():AccountBalance[]{
    let balance:AccountBalance[];
    balance = this.accounts.map((a)=>{
      let sold = this.getDebitOrCreditTotal(DebitCredit.DEBIT,a.id)- this.getDebitOrCreditTotal(DebitCredit.CREDIT,a.id)
      let soldDebit;
      let soldCredit;
      if(sold>0){
        soldDebit = Math.abs(sold)
        soldCredit = 0
      }else {
        soldDebit = 0
        soldCredit = Math.abs(sold)
      }
      let row = {
        id:a.number,
        account:a.name,
        debit:this.getDebitOrCreditTotal(DebitCredit.DEBIT,a.id),
        credit:this.getDebitOrCreditTotal(DebitCredit.CREDIT,a.id),
        soldDebit,
        soldCredit
      } as AccountBalance;

      return row
    })

   let total = balance.reduce((prev:AccountBalance, curr:AccountBalance) => {
      prev.credit += curr.credit
      prev.debit += curr.debit
      prev.soldCredit += curr.soldCredit
      prev.soldDebit += curr.soldDebit
      return prev
    },{id:'',account:'Totale',debit:0,credit:0,soldCredit:0,soldDebit:0} as AccountBalance)
    
    balance.splice(0,0,total)
    return balance;
  }
}