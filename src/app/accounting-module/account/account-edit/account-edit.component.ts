import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TYPE_ACCOUNT } from 'src/app/shared-module/constant/data/type-account';
import { Account } from '../../model/account';
import ACCOUNTS from '../../../shared-module/constant/data/';
import { TypeAccount } from '../../model/type-account';
import { Crud } from '../../model/crud';
import { Router } from '@angular/router';

@Component({
  selector: 'account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent {

  accounts!: Account[];
  form!: FormGroup;
  typeAccount: TypeAccount[] = TYPE_ACCOUNT

  @Input()
  option!: Crud;

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.checkOption();
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      updateAccount: "1",
      id: '',
      number: ['', Validators.required],
      name: ['', Validators.required],
      typeId: ['1', Validators.required]
    })
    this.handelOnChange()
  }

  cancel(): void {
    this.route.navigate(['/accounting'])
  }

  valide(): void {

    this.form.markAllAsTouched();
    if (this.form.valid) {
      let account: Account = {} as Account;
      account.id = this.form.value.id;
      account.number = this.form.value.number;
      account.name = this.form.value.name;
      account.typeId = this.form.value.typeId;
      this.route.navigate(['/accounting'])
    }

  }

  getAccounts(): void {
    this.accounts = ACCOUNTS;
  }

  getAccountById(id: string): Account {
    let account = this.accounts?.find(a => a.id === id) ?? {} as Account;
    return account;
  }

  checkOption(): void {
    switch (this.option) {
      case Crud.UPDATE:
        this.updateSetting();
        break;
    }
  }

  handelOnChange(): void {
    let account = this.getAccountById(this.form.value.updateAccount)
    if (account.id) {
      this.form.patchValue({
        id: account.id,
        number: account.number,
        name: account.name,
        typeId: account.typeId,
      })
    }
  }

  updateSetting(): void {
    this.getAccounts();
  }
}
