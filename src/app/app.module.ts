import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientAddEditComponent } from './client-add-edit/client-add-edit.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DatabaseService } from './services/database.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {path:"",component:HomePageComponent},
  {path:"actualizar/:index",component:ClientAddEditComponent}]

@NgModule({
  declarations: [
    AppComponent,
    ClientAddEditComponent,
    ClientListComponent,
    HomePageComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
