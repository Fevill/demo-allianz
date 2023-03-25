import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../model/account';
import { Crud } from '../../model/crud';
import ACCOUNTS from '../../../shared-module/constant/data/accounts.json';
import { JournalRow } from '../../model/journal-row';

@Component({
  selector: 'journal-row-edit',
  templateUrl: './journal-row-edit.component.html',
  styleUrls: ['./journal-row-edit.component.scss']
})
export class JournalRowEditComponent {
  accounts!: Account[];
  form!: FormGroup;

  @Input()
  option!: Crud;

  data!: JournalRow;
  action!: Crud;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { data: any, action: Crud }
    this.data = state?.data as JournalRow
    this.action = state?.action;
  }

  ngOnInit(): void {
    this.initForm();
    this.checkOption();
    this.getAccounts();
  }

  initForm(): void {
    this.form = this.fb.group({
      id: '',
      label: [this.data?.label ?? '', Validators.required],
      dateOperation: [this.data?.dateOperation ?? '', Validators.required],
      creditId: [this.data?.credit?.id ?? '', Validators.required],
      debitId: [this.data?.debit.id ?? '', Validators.required],
      tva: [this.data?.tva ?? ''],
      amount: [this.data?.amount ?? 0, Validators.required],
      note: [this.data?.note ?? '']
    })

    if (this.action === Crud.UPDATE) {
      this.form.patchValue({
        id: this.data?.id ?? '',
      })
    }

    if (this.action === Crud.DISPLAY) {
      this.form.disable()
    }

  }

  cancel(): void {
    this.router.navigate(['/accounting/journal'])
  }

  valide(): void {

    this.form.markAllAsTouched();
    if (this.form.valid) {
      let journalRow: JournalRow = {} as JournalRow;

      journalRow.id = this.form.value.id;
      journalRow.label = this.form.value.label;
      journalRow.dateOperation = this.form.value.dateOperation;
      journalRow.credit = this.getAccount(this.form.value.creditId);;
      journalRow.debit = this.getAccount(this.form.value.debitId);
      journalRow.tva = this.form.value.tva;
      journalRow.amount = this.form.value.amount;
      journalRow.note = this.form.value.note;
      console.log(journalRow)
      this.router.navigate(['/accounting/journal'])
    }

  }



  checkOption(): void {
    switch (this.option) {
      case Crud.UPDATE:
        break;
    }
  }

  getAccounts(): void {
    this.accounts = ACCOUNTS;
  }

  getAccount(id: string): Account {
    let account = this.accounts?.find((account) => account.id === id);
    if (account)
      return account;
    return {} as Account
  }

}
