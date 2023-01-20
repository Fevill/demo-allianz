import { Component } from '@angular/core';
import { Crud } from '../../model/crud';

@Component({
  selector: 'journal-row-create',
  templateUrl: './journal-row-create.component.html',
  styleUrls: ['./journal-row-create.component.scss']
})
export class JournalRowCreateComponent {
  readonly option:Crud = Crud.CREATE
}
