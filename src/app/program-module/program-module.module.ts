import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramCreateComponent } from './program-create/program-create.component';
import { ProgramDisplayComponent } from './program-display/program-display.component';
import { ProgramModifyComponent } from './program-modify/program-modify.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ProgramEditComponent } from './program-edit/program-edit.component';

const programRoutes: Routes = [
  {
    path: 'program/create',
    component: ProgramCreateComponent
  },
  {
    path: 'program/display',
    component: ProgramDisplayComponent
  },
  {
    path: 'program/list',
    component: ProgramListComponent
  },
  {
    path: 'program/modify',
    component: ProgramModifyComponent
  }
];


@NgModule({
  declarations: [
    ProgramCreateComponent,
    ProgramDisplayComponent,
    ProgramModifyComponent,
    ProgramListComponent,
    ProgramEditComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(programRoutes)
  ],
  exports: [
    ProgramCreateComponent,
    ProgramDisplayComponent,
    ProgramModifyComponent,
    ProgramListComponent
  ]
})
export class ProgramModuleModule { }