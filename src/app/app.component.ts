import { Component, inject } from '@angular/core';
import {initializeApp} from "firebase/app";
import { LoginService } from './services/login.service';
import { environment } from './environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  app = initializeApp(
    {apiKey: environment.apiKey,
    authDomain: environment.authDomain});

  login = inject(LoginService);
}
