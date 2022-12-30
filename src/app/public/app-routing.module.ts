import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'programe',
    loadChildren: () =>
      import('../program-module/program-module.module').then(p => p.ProgramModuleModule),
  },
  {
    path: 'squad',
    loadChildren: () =>
      import('../squad-module/squad-module.module').then(s => s.SquadModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
