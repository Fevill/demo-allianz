import { Component, Input } from '@angular/core';
import { Theader } from 'src/app/shared-module/components/data-table/models/Theader';
import { Bilan } from '../../model/bilan';
import { Resultat } from '../../model/resultat';

@Component({
  selector: 'bilan-table',
  templateUrl: './bilan-table.component.html',
  styleUrls: ['./bilan-table.component.scss']
})
export class BilanTableComponent {

  @Input()
  data!: Bilan[];
  @Input()
  headers!: Theader;
}
