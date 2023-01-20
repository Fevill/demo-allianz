import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnumType } from 'src/app/shared-module/components/data-table/models/enum-type';
import { Theader } from 'src/app/shared-module/components/data-table/models/Theader';
import JOURNAL from '../../shared-module/constant/data/journal.json';

@Component({
  selector: 'journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent {

  data = JOURNAL;
  constructor(private route: Router) {

  }

  headers: Theader[] = [
    { display: "Id", label: 'id', },
    { display: "Label", label: 'label' },
    {
      display: "Date de Création",
      label: 'dateCreation',
      dataType: EnumType.DATE,
      dataFormater: 'DD/MM/YYYY'
    },
    { 
      display: "Debit", 
      label: 'debit', 
      dataType: EnumType.ACCOUNT
    },
    { 
      display: "Credit", 
      label: 'credit' ,
      dataType: EnumType.ACCOUNT
    },
    { display: "Tva", label: 'tva' },
    { display: "Montant", label: 'amount' },
    { display: "Note", label: 'note' },
  ]

  newJournalRow(): void {
    this.route.navigate(['/accounting/journal/create'])
  }
}
