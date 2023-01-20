import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Business } from '../../../model/business';

@Component({
  selector: 'accounting-home',
  templateUrl: './accounting-home.component.html',
  styleUrls: ['./accounting-home.component.scss']
})
export class AccountingHomeComponent {
  business!: Business

  constructor(private router:Router){}

  gotoAccount():void {
     this.router.navigate(['accounting/account'])
  }

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
