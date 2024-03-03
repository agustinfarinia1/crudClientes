import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private login:LoginService){
    this.formulario = new FormGroup({
      user : new FormControl(),
      password : new FormControl(),
    })
  }
  formulario:FormGroup;

  onSubmit(){
    this.login.login(this.formulario.value["user"],this.formulario.value["password"]);
  }
}
