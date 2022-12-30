import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AquilaModuleModule } from '../aquila-module/aquila-module.module';
import { PsHeaderComponent } from './components/ps-header/ps-header.component';
import { ProgramModuleModule } from '../program-module/program-module.module';
import { AppRoutingModule } from './app-routing.module';
import { SquadModuleModule } from '../squad-module/squad-module.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [AppComponent, PsHeaderComponent, HomeComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientJsonpModule,
        HttpClientModule,
        ReactiveFormsModule,
        AquilaModuleModule,
        AppRoutingModule,
        SquadModuleModule,
        ProgramModuleModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

/** Copyright Allianz 2022 */
