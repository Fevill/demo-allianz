import { Component } from '@angular/core';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  tabs:any[] = [
    {
      link:'create',
      label:'Ajouter'
    },
    {
      link:'update',
      label:'Modifier'
    }
  ]
}
