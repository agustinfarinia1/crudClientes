import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { CookieService } from 'ngx-cookie-service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:RouterService,private cookie:CookieService) {}

  token:any;
  auth = getAuth();

  login(email:string,password:string){
    signInWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.getIdTokenResult().then((response) =>{
        this.token = response.token;
        this.cookie.set("log",this.token);
        this.router.irHome();
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  getIdToken(){
    return this.cookie.get("log");
  }

  isLogged(){
    if(this.getIdToken()){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    this.auth.signOut().then((response) => {
      this.token = "";
      this.cookie.set("log",this.token);
    })
  }
}
