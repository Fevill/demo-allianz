import { Component, Input } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { EnumType } from 'src/app/shared-module/components/data-table/models/enum-type';
import { Theader } from 'src/app/shared-module/components/data-table/models/Theader';

import { Resultat } from '../../model/resultat';

@Component({
  selector: 'resultat-table',
  templateUrl: './resultat-table.component.html',
  styleUrls: ['./resultat-table.component.scss']
})
export class ResultatTableComponent {

  @Input()
  data!: Resultat[];
  @Input()
  headers!: Theader;

}
