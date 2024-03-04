import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientAddEditComponent } from './components/client-add-edit/client-add-edit.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DatabaseService } from './services/database.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { DataService } from './services/data.service';
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { RouterService } from './services/router.service';
import { canActivate } from './login.guardian';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { ClientItemComponent } from './components/client-item/client-item.component';

const appRoutes:Routes=[
  {path:"",component:HomePageComponent,canActivate:[canActivate]},
  {path:"lista",component:ClientListComponent,canActivate:[canActivate]},
  {path:"detalle/:index",component:ClientItemComponent,canActivate:[canActivate]},
  {path:"login",component:LoginComponent},
  {path:"actualizar/:index",component:ClientAddEditComponent,canActivate:[canActivate]}]

@NgModule({
  declarations: [
    AppComponent,
    ClientAddEditComponent,
    ClientListComponent,
    HomePageComponent,
    NavBarComponent,
    LoginComponent,
    ClientItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    NgxNavbarModule,
    BrowserModule
  ],
  providers: [DatabaseService,DataService,LoginService,CookieService,RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
