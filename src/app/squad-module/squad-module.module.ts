import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadDisplayComponent } from './squad-display/squad-display.component';
import { SquadListComponent } from './squad-list/squad-list.component';
import { SquadCreateComponent } from './squad-create/squad-create.component';
import { SquadModifyComponent } from './squad-modify/squad-modify.component';import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';

const squadRoutes: Routes = [
  {
    path: 'squad/create',
    component: SquadCreateComponent
  },
  {
    path: 'squad/display',
    component: SquadDisplayComponent
  },
  {
    path: 'squad/list',
    component: SquadListComponent
  },
  {
    path: 'squad/modify',
    component: SquadModifyComponent
  }
];

@NgModule({
  declarations: [
    SquadDisplayComponent,
    SquadListComponent,
    SquadCreateComponent,
    SquadModifyComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(squadRoutes)
  ],
  exports: [
    SquadDisplayComponent,
    SquadListComponent,
    SquadCreateComponent,
    SquadModifyComponent
  ]
})
export class SquadModuleModule { }
