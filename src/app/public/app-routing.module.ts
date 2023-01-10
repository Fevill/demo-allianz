import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InConstructionComponent } from '../shared-module/components/in-construction/in-construction.component';
import { PageNotFoundComponent } from '../shared-module/components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'accounting',
    loadChildren: () =>
      import('../accounting-module/accounting-module.module').then(a => a.AccountingModuleModule),
  },
  { path: '', redirectTo: 'accounting', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
