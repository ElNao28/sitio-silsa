import { CanMatchFn } from '@angular/router';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  const isLogin = localStorage.getItem('token');
  if(isLogin){
    return true;
  }else{
    return false;
  }
};
