import { Component } from '@angular/core';
import { EnumType } from 'src/app/shared-module/components/data-table/models/enum-type';
import { Theader } from 'src/app/shared-module/components/data-table/models/Theader';
import JOURNAL from '../../../shared-module/constant/data/journal.json';

@Component({
  selector: 'resultat-table',
  templateUrl: './resultat-table.component.html',
  styleUrls: ['./resultat-table.component.scss']
})
export class ResultatTableComponent {
  
  data = JOURNAL;

  headers: Theader[] = [
    { display: "Id", label: 'id' },
    {
      display: "Date",
      label: 'dateCreation',
      dataType: EnumType.DATE,
      dataFormater: 'DD/MM/YYYY'
    },
    { display: "Label", label: 'label' },
    { display: "Montant", label: 'amount' },
  ]

}
