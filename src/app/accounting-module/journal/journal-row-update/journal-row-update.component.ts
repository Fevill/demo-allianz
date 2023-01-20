import { Component } from '@angular/core';
import { Crud } from '../../model/crud';

@Component({
  selector: 'journal-row-update',
  templateUrl: './journal-row-update.component.html',
  styleUrls: ['./journal-row-update.component.scss']
})
export class JournalRowUpdateComponent {
  readonly option:Crud = Crud.UPDATE
}
