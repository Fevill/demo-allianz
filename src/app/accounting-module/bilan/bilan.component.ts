import { Component } from '@angular/core';
import { EnumType } from 'src/app/shared-module/components/data-table/models/enum-type';
import { Theader } from 'src/app/shared-module/components/data-table/models/Theader';
import JOURNAL from '../../shared-module/constant/data/journal.json';
import ACCOUNTS from '../../shared-module/constant/data/accounts.json';
import { Account } from '../model/account';
import { AccountSold } from '../model/account-sold';
import { Bilan } from '../model/bilan';
import { DebitCredit } from '../model/debit-credit';
import { JournalRow } from '../model/journal-row';
import moment from 'moment';

@Component({
  selector: 'bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.scss']
})
export class BilanComponent {

  bilanActCirDebt!: Bilan[];
  bilanActImoCapital!: Bilan[];
  totalPassifs!: number;
  totalActifs!: number;
  journal!: JournalRow[];
  date:string = '2023-12-31';


  headers: Theader = {
    columns: [
      { display: "Id", label: 'actif.number', dataType: EnumType.ACCOUNT_SOLD, width: '5%' },
      { display: "Label", label: 'actif.label', dataType: EnumType.ACCOUNT_SOLD, width: '30%' },
      { display: "Montant", label: 'actif.amount', dataType: EnumType.ACCOUNT_SOLD, width: '15%' },
      { display: "Id", label: 'passif.number', dataType: EnumType.ACCOUNT_SOLD, width: '5%' },
      { display: "Label", label: 'passif.label', dataType: EnumType.ACCOUNT_SOLD, width: '30%' },
      { display: "Montant", label: 'passif.amount', dataType: EnumType.ACCOUNT_SOLD, width: '15%' }
    ]
  }

  ngOnInit() {
    this.setData()
  }

  getBilanAccount(): Account[] {
    return ACCOUNTS.filter((acc) => acc.category === 'BIL');
  }

  getJournal(): void {
    this.journal = [...JOURNAL]
    let j: JournalRow =
      {
        "id": "8",
        "label": "Arachide",
        "dateCreation": "2023-01-12",
        "credit": {
          "id": "",
          "number": "2800",
          "name": "Capital",
          "typeId": "4",
          "category": "",
          "patrimoine": ""
        },
        "debit": {
          "id": "42",
          "number": "2979",
          "name": "Résultat de l'exercice",
          "typeId": "4",
          "category": "BIL",
          "patrimoine": "PAS"
        },
        "tva?": "20",
        "amount": 35,
        "note": "Note 5"
      } as JournalRow;
    this.journal.push(j)
  }

  setBilanData(bilanData: Bilan[], actifFilters: string[], passifFilters: string[], actifHeader: string, passifHeader: string): Bilan[] {
    bilanData = [];
    let head = {
      actif: {
        label: `${actifHeader}`
      } as AccountSold,
      passif: {
        label: `${passifHeader}`
      } as AccountSold
    } as Bilan
    bilanData.push(head)
    bilanData.push(...this.joinBilan(actifFilters, passifFilters));

    return bilanData;
  }

  joinBilan(strActif: string[], strPassif: string[],) {
    let actifs = this.getBilan(strActif);
    let passifs = this.getBilan(strPassif);
    let maxIndex = Math.max(actifs.length, passifs.length)
    let data: Bilan[] = []
    for (let index = 0; index < maxIndex; index++) {
      let row = {
        actif: {
          ...actifs?.[index]?.actif,
        } as AccountSold,
        passif: {
          ...passifs?.[index]?.passif,
        } as AccountSold
      }
      data.push(row)
    }
    return data;
  }

  getDebitOrCreditTotal(DebitOrCredit: DebitCredit, accountId: string): number {
    const starDate = moment('01-01-2023', 'DD-MM-YYYY');
    const endDate = moment(this.date, 'YYYY-MM-DD');
    return this.journal
      .filter((jr) => moment(jr.dateCreation, 'YYYY-MM-DD') >= starDate && moment(jr.dateCreation, 'YYYY-MM-DD') <= endDate)
      .filter((jr) => jr[DebitOrCredit].id === accountId)
      .reduce((prev, curr) => prev + curr.amount, 0)
  }

  getBilan(filters: string[]) {
    let res = this.getBilanAccount()
      .filter(a => filters.includes(a.typeId))
      .map((a) => {
        let sold = this.getDebitOrCreditTotal(DebitCredit.DEBIT, a.id) - this.getDebitOrCreditTotal(DebitCredit.CREDIT, a.id)
        let row = {} as Bilan
        if (['1', '2'].includes(a.typeId)) {
          row = {
            ...row,
            actif: {
              number: a.number,
              label: a.name,
              amount: sold
            } as AccountSold,
          }
        }
        else {
          row = {
            ...row,
            passif: {
              number: a.number,
              label: a.name,
              amount: sold
            } as AccountSold
          }
        }
        return row;
      });
    return res;
  }

  onDateChange(): void {
    this.setData()
  }

  setData(){
    this.getJournal();
    this.bilanActCirDebt = this.setBilanData(this.bilanActCirDebt, ['1'], ['3'], 'Actifs circulants', 'Dettes')
    this.bilanActImoCapital = this.setBilanData(this.bilanActImoCapital, ['2'], ['4'], 'Actifs immobilisés', 'Capitaux')
    this.totalActifs = this.bilanActCirDebt.reduce((prev, curr) => prev + (curr?.actif?.amount ?? 0), 0)
    this.totalActifs += this.bilanActImoCapital.reduce((prev, curr) => prev + (curr?.actif?.amount ?? 0), 0)
    this.totalPassifs = this.bilanActCirDebt.reduce((prev, curr) => prev + (curr?.passif?.amount ?? 0), 0)
    this.totalPassifs += this.bilanActImoCapital.reduce((prev, curr) => prev + (curr?.passif?.amount ?? 0), 0)
  }

}
