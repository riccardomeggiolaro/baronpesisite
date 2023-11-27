import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authSrv = inject(AuthService);

  const isLoggedIn = authSrv.isLoggedIn();

  if(isLoggedIn){
    return true;
  }else{
    return false;
  }
}