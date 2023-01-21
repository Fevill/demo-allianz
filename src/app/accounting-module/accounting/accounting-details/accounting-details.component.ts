import { Component } from '@angular/core';

@Component({
  selector: 'accounting-details',
  templateUrl: './accounting-details.component.html',
  styleUrls: ['./accounting-details.component.scss']
})
export class AccountingDetailsComponent {


  tabs:any[] = [
    {
      link:'home',
      label:'Accounting'
    },
    {
      link:'journal',
      label:'Journal'
    },
    {
      link:'ledger',
      label:'Grand livre'
    },
    {
      link:'balance',
      label:'Balance'
    },
    {
      link:'resultat',
      label:'Resultat'
    },
    {
      link:'bilan',
      label:'Bilan'
    },
    {
      link:'graph',
      label:'Graphique'
    }
  ]

}
