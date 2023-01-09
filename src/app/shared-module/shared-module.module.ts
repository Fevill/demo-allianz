import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { TopBarComponent } from './components/form-header/top-bar/top-bar.component';
import { ProgramBarComponent } from './components/form-header/program-bar/program-bar.component';
import { InConstructionComponent } from './components/in-construction/in-construction.component';


@NgModule({
  declarations: [
    FormHeaderComponent,
    TopBarComponent,
    ProgramBarComponent,
    InConstructionComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FormHeaderComponent  
  ]
})
export class SharedModuleModule { }
