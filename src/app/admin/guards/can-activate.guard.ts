import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  const isLogin = localStorage.getItem('token');
  if(isLogin){
    return true;
  }else{
    return false;
  }
};
