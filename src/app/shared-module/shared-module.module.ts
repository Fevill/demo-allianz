import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { TopBarComponent } from './components/form-header/top-bar/top-bar.component';
import { ProgramBarComponent } from './components/form-header/program-bar/program-bar.component';
import { InConstructionComponent } from './components/in-construction/in-construction.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderN1Component } from './components/header-n1/header-n1.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderTabComponent } from './components/header-tab/header-tab.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CellFormatterPipe } from './components/data-table/cell-formatter.pipe';
const routes: Routes = [
  {path:"products",component:InConstructionComponent}
]
@NgModule({
  declarations: [

    FormHeaderComponent,
    TopBarComponent,
    ProgramBarComponent,
    HeaderComponent,
    InConstructionComponent,
    HeaderN1Component,
    PageNotFoundComponent,
    HeaderTabComponent,
    DataTableComponent,
    CellFormatterPipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FormHeaderComponent,
    HeaderComponent,
    HeaderN1Component,
    HeaderTabComponent,
    DataTableComponent
  ]
})
export class SharedModuleModule { }
