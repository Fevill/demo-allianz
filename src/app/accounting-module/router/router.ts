import { Routes } from "@angular/router";
import { InConstructionComponent } from "src/app/shared-module/components/in-construction/in-construction.component";
import { AccountingComponent } from "../accounting/accounting.component";

export const ACCOUNTING_ROUTES: Routes = [
    {
        path: '',
        component: AccountingComponent,
        children: [
            {
                path: 'home',
                component: AccountingComponent
            },
            {
                path: 'journal',
                component: InConstructionComponent
            },
            {
                path: 'ledger',
                component: InConstructionComponent
            },
            {
                path: 'balance',
                component: InConstructionComponent
            },
            {
                path: 'bilan',
                component: InConstructionComponent
            }, 
            {
                path: 'graph',
                component: InConstructionComponent
            },
        ]
    },
];