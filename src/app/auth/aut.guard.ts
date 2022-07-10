import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AutService } from './aut.service';

@Injectable({
  providedIn: 'root'
})
export class AutGuard implements CanActivate {

  isLoggedin: boolean= false;

constructor(private autService: AutService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
/*     return this.autService.isAuthenticated(); */
return this.autService.autSubject.pipe(
  map(user => !!user),
  map(userBool => {
    if(userBool){
      return true;
    }
    return this.router.createUrlTree(['/login'])
  })
)
  }

}
