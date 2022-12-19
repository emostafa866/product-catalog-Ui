import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, range} from 'rxjs';
import { map, filter} from 'rxjs';
import { SharedService } from '../shared/sevice/shared.service';

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardGuard implements CanActivate {
  constructor(private sharedService :SharedService, private router:Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.sharedService.isLogged()){
         return this.sharedService.isLogged()
      }else{
        this.router.navigate(['/login'])
      }
      return  this.sharedService.isLogged();
  }
  
}
