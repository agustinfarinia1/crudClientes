import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent{
  constructor(private login:LoginService){
  }

  logout(){
    this.login.logout();
  }

  isLogged(){
    return this.login.isLogged();
  }
}
