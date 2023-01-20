import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TYPE_ACCOUNT } from 'src/app/shared-module/constant/data/type-account';
import { Account } from '../../model/account';
import { Crud } from '../../model/crud';

@Component({
  selector: 'account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent {

  readonly option:Crud = Crud.CREATE

   
}
