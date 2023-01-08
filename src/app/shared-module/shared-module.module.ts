import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { TopBarComponent } from './components/form-header/top-bar/top-bar.component';
import { ProgramBarComponent } from './components/form-header/program-bar/program-bar.component';
import { AquilaModuleModule } from '../aquila-module/aquila-module.module';



@NgModule({
  declarations: [
    FormHeaderComponent,
    TopBarComponent,
    ProgramBarComponent
  ],
  imports: [
    CommonModule,
    AquilaModuleModule,
  ],
  exports:[
    FormHeaderComponent  
  ]
})
export class SharedModuleModule { }
