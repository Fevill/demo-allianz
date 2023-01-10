import { Component } from '@angular/core';
import { Business } from '../model/business';

@Component({
  selector: 'accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent {

  business!: Business

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
      link:'bilan',
      label:'Bilan initial'
    },
    {
      link:'bilan',
      label:'Bilan final'
    },
    {
      link:'graph',
      label:'Graphique'
    }
  ]

  ngOnInit() {
    this.business = {
      id: 'id',
      name: 'Hello',
      fiscalexercise: {
        id: 'id',
        startDate: '01/01/2023',
        endDate: '31/12/2023',
      }
    }
  }
}
