import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./material/material.module";
import { MosaicHeroComponent } from './components/mosaic-hero/mosaic-hero.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';
import { ViewAllHeroesComponent } from './components/view-all-heroes/view-all-heroes.component';
import { ModifyHeroComponent } from './components/modify-hero/modify-hero.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { UppercaseDirective } from './directives/uppercase.directive';
import { UppercaseInputDirective } from './directives/uppercaseInput.directive';
import { DeleteHeroDialogComponent } from './components/delete-hero-dialog/delete-hero-dialog.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    MosaicHeroComponent,
    SearchHeroComponent,
    ViewAllHeroesComponent,
    AddHeroComponent,
    ModifyHeroComponent,
    UppercaseDirective,
    UppercaseInputDirective,
    DeleteHeroDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
