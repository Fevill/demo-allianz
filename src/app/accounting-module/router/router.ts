import { Routes } from "@angular/router";
import { InConstructionComponent } from "src/app/shared-module/components/in-construction/in-construction.component";
import { AccountCreateComponent } from "../account/account-create/account-create.component";
import { AccountUpdateComponent } from "../account/account-update/account-update.component";
import { AccountComponent } from "../account/account.component";
import { AccountingDetailsComponent } from "../accounting/accounting-details/accounting-details.component";
import { AccountingHomeComponent } from "../accounting/accounting-details/accounting-home/accounting-home.component";
import { AccountingComponent } from "../accounting/accounting.component";
import { BalanceComponent } from "../balance/balance.component";
import { JournalRowCreateComponent } from "../journal/journal-row-create/journal-row-create.component";
import { JournalRowUpdateComponent } from "../journal/journal-row-update/journal-row-update.component";
import { JournalComponent } from "../journal/journal.component";
import { LedgerComponent } from "../ledger/ledger.component";
import { ResultatComponent } from "../resultat/resultat.component";

export const ACCOUNTING_ROUTES: Routes = [
    {
        path: '',
        component: AccountingComponent,
        children: [
            {
                path: '',
                component: AccountingDetailsComponent,
                children:
                    [

                        {
                            path: 'home',
                            component: AccountingHomeComponent
                        },

                        {
                            path: 'journal',
                            component: JournalComponent,
                        },
                        {
                            path: 'journal/create',
                            component: JournalRowCreateComponent
                        },
                        {
                            path: 'journal/display',
                            component: JournalRowUpdateComponent
                        },
                        {
                            path: 'journal/update',
                            component: JournalRowUpdateComponent
                        },
                        {
                            path: 'ledger',
                            component: LedgerComponent
                        },
                        {
                            path: 'balance',
                            component: BalanceComponent
                        },
                        {
                            path: 'resultat',
                            component: ResultatComponent
                        },
                        {
                            path: 'bilan',
                            component: InConstructionComponent
                        },
                        {
                            path: 'graph',
                            component: InConstructionComponent
                        },
                        { path: '', redirectTo: 'home', pathMatch: 'full' },
                    ]
            },
            {
                path: 'account',
                component: AccountComponent,
                children:
                    [

                        {
                            path: 'create',
                            component: AccountCreateComponent
                        },
                        {
                            path: 'update',
                            component: AccountUpdateComponent
                        },
                        { path: '', redirectTo: 'create', pathMatch: 'full' },
                    ]
            },
        ]
    },
];