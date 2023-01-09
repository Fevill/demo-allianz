import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AccountingComponent } from './accounting/accounting.component';
import { RouterModule } from '@angular/router';
import { ACCOUNTING_ROUTES } from './router/router';


@NgModule({
  declarations: [
    AccountingComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(ACCOUNTING_ROUTES)
  ]
})
export class AccountingModuleModule { }
