import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  irHome(){
    this.router.navigate(["/"]);
  }

  irLogin(){
    this.router.navigate(["/login"]);
  }
}
