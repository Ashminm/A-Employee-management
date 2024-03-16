import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const admin=inject(AdminService)
  const toaster=inject(ToastrService)
  const router=inject(Router)

  if(admin.isLoggedIn()){
    return true
  }
  else{
    toaster.warning("Operation Deneid.... Please login!!!")
    router.navigateByUrl("/")
  }
  return true;
};
