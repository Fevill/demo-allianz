import { Component } from '@angular/core';
import { Theader } from 'src/app/shared-module/components/data-table/models/Theader';
import { Resultat } from '../model/resultat';
import ACCOUNTS from '../../shared-module/constant/data/accounts.json';
import JOURNAL from '../../shared-module/constant/data/journal.json';
import { Account } from '../model/account';
import { DebitCredit } from '../model/debit-credit';

@Component({
  selector: 'resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent {

  resultatEnt!: Resultat[];
  prevResultEnt!: Resultat;
  resultatExp!: Resultat[];
  resultatOth!: Resultat[];

  showHeaders: Theader = {
    isShow: true,
    columns: [
      { display: "Id", label: 'productNumber', width: '5%' },
      { display: "Label", label: 'productLabel', width: '30%' },
      { display: "Montant", label: 'productAmount', width: '15%' },
      { display: "Id", label: 'chargeNumer', width: '5%' },
      { display: "Label", label: 'chargeLabel', width: '30%' },
      { display: "Montant", label: 'chargeAmount', width: '15%' }
    ]
  }

  hideHeaders: Theader = {
    columns: [
      { display: "Id", label: 'productNumber', width: '5%' },
      { display: "Label", label: 'productLabel', width: '30%' },
      { display: "Montant", label: 'productAmount', width: '15%' },
      { display: "Id", label: 'chargeNumer', width: '5%' },
      { display: "Label", label: 'chargeLabel', width: '30%' },
      { display: "Montant", label: 'chargeAmount', width: '15%' }
    ]
  }

  getResulatAccount(): Account[] {
    return ACCOUNTS.filter((acc) => acc.category === 'RES');
  }

  ngOnInit() {

    this.setDate();
  }

  getDebitOrCreditTotal(DebitOrCredit: DebitCredit, accountId: string): number {
    return JOURNAL
      .filter((jr) => jr[DebitOrCredit].id === accountId)
      .reduce((prev, curr) => prev + curr.amount, 0)
  }

  getResultat(filters: string[]) {
    let res = this.getResulatAccount()
      .filter(a => filters.includes(a.typeId))
      .map((a) => {
        let sold = this.getDebitOrCreditTotal(DebitCredit.DEBIT, a.id) - this.getDebitOrCreditTotal(DebitCredit.CREDIT, a.id)
        let row = {} as Resultat
        if (['5', '9', '11', '13'].includes(a.typeId)) {
          row = {
            ...row,
            productNumber: a.number,
            productLabel: a.name,
            productAmount: Math.abs(sold)
          }
        } else {
          row = {
            ...row,
            chargeNumer: a.number,
            chargeLabel: a.name,
            chargeAmount: Math.abs(sold)
          }
        }
        return row;
      });
    return res;
  }

  setDate() {
    this.resultatExp = this.calculTotal(this.joinResult(['5', '13'], ['6', '7', '8']))
    let prevResultExp = this.resultatExp.find((r) => r.chargeLabel === 'Benéfice')
    this.resultatEnt = this.calculTotal(this.joinResult(['9'], ['10']), prevResultExp)
    let prevResultEnt = this.resultatEnt.find((r) => r.chargeLabel === 'Benéfice')
    this.resultatOth = this.calculTotal(this.joinResult(['11'], ['12']), prevResultEnt)
  }

  joinResult(strProduct: string[], strCharge: string[],) {
    let product = this.getResultat(strProduct);
    let charge = this.getResultat(strCharge);
    let maxIndex = Math.max(charge.length, product.length)
    let data: Resultat[] = []
    for (let index = 0; index < maxIndex; index++) {
      let row = {
        productNumber: product?.[index]?.productNumber,
        productLabel: product?.[index]?.productLabel,
        productAmount: product?.[index]?.productAmount ?? 0,
        chargeNumer: charge?.[index]?.chargeNumer,
        chargeLabel: charge?.[index]?.chargeLabel,
        chargeAmount: charge?.[index]?.chargeAmount ?? 0,
      }
      data.push(row)
    }
    return data;
  }

  calculTotal(data: Resultat[], prevResultExp?: Resultat): Resultat[] {
    let prevResult = {
      chargeLabel: 'Totale',
      chargeAmount: 0,
      productLabel: 'Totale',
      productAmount: 0
    } as Resultat
    if (prevResultExp) {
      let prevResultExpVx = {
        chargeLabel: prevResultExp?.productLabel,
        chargeAmount: prevResultExp?.productAmount,
        productLabel: prevResultExp?.chargeLabel,
        productAmount: prevResultExp?.chargeAmount
      } as Resultat
      data.splice(0, 0, prevResultExpVx)
    }


    let total = data?.reduce((prev, curr) => {
      prev.chargeAmount += curr.chargeAmount
      prev.productAmount += curr.productAmount
      return prev;
    }, prevResult)

    if (data?.find((d) => d.chargeLabel === 'Totale')?.chargeAmount === undefined) {
      let sold = total.productAmount - total.chargeAmount;
      let synthese = {
        chargeAmount: 0,
        productAmount: 0
      } as Resultat
      if (sold >= 0) {
        synthese = {
          ...synthese,
          chargeLabel: 'Benéfice',
          chargeAmount: Math.abs(sold),
        } as Resultat
      } else {
        synthese = {
          ...synthese,
          productLabel: 'Perte',
          productAmount: Math.abs(sold),
        } as Resultat
      }


      data?.push(synthese);
      total.productAmount += synthese.productAmount
      total.chargeAmount += synthese.chargeAmount
      data?.push(total);
    }
    return data;
  }
}

