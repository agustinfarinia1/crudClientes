import { inject } from "@angular/core";
import { LoginService } from "./services/login.service";
import { RouterService } from "./services/router.service";

export const canActivate = () => {
  let login = inject(LoginService);
  let router = inject(RouterService);
  if(login.isLogged()){
    return true;
  }else{
    router.irLogin();
    return false;
  }
}
