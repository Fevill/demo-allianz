import { Component } from '@angular/core';
import { Crud } from '../../model/crud';

@Component({
  selector: 'account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent {
  readonly option:Crud = Crud.UPDATE
}
