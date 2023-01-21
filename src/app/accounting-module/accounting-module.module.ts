import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AccountingComponent } from './accounting/accounting.component';
import { RouterModule } from '@angular/router';
import { ACCOUNTING_ROUTES } from './router/router';
import { AccountComponent } from './account/account.component';
import { AccountingHomeComponent } from './accounting/accounting-details/accounting-home/accounting-home.component';
import { AccountingDetailsComponent } from './accounting/accounting-details/accounting-details.component';
import { AccountCreateComponent } from './account/account-create/account-create.component';
import { AccountUpdateComponent } from './account/account-update/account-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { JournalComponent } from './journal/journal.component';
import { JournalRowEditComponent } from './journal/journal-row-edit/journal-row-edit.component';
import { JournalRowUpdateComponent } from './journal/journal-row-update/journal-row-update.component';
import { JournalRowCreateComponent } from './journal/journal-row-create/journal-row-create.component';
import { JournalRowDeleteComponent } from './journal/journal-row-delete/journal-row-delete.component';
import { LedgerComponent } from './ledger/ledger.component';
import { BalanceComponent } from './balance/balance.component';
import { ResultatComponent } from './resultat/resultat.component';
import { ResultatTableComponent } from './resultat/resultat-table/resultat-table.component';
import { BilanComponent } from './bilan/bilan.component';
import { BilanTableComponent } from './bilan/bilan-table/bilan-table.component';


@NgModule({
  declarations: [
    AccountingComponent,
    AccountComponent,
    AccountingHomeComponent,
    AccountingDetailsComponent,
    AccountCreateComponent,
    AccountUpdateComponent,
    AccountEditComponent,
    JournalComponent,
    JournalRowEditComponent,
    JournalRowUpdateComponent,
    JournalRowCreateComponent,
    JournalRowDeleteComponent,
    LedgerComponent,
    BalanceComponent,
    ResultatComponent,
    ResultatTableComponent,
    BilanComponent,
    BilanTableComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(ACCOUNTING_ROUTES)
  ]
})
export class AccountingModuleModule { }
