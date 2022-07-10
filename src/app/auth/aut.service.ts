import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { IAutData } from './interfaces/iaut-data';
import { ISignupData } from './interfaces/isignup-data';
import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root',
})
export class AutService {
 /*  private loggedIn = false; */
  autSubject = new BehaviorSubject<IAutData | null>(null);
  private urlJsonServer = 'http://localhost:4201';
  helper = new JwtHelperService();

  constructor( private http: HttpClient, private router: Router) {
    this.restoreUserLogin();
  }

/*   isAuthenticated(): boolean {
    return this.loggedIn;
  } */

restoreUserLogin() {
  const json = localStorage.getItem('isAuthenticated');
  if(json) {
    const user = JSON.parse(json);
    if(this.helper.isTokenExpired(user.accessToken)) {
      localStorage.removeItem('isAuthenticated');
      return
    } else {
      this.autSubject.next(user);
    }
  }
}

  login(obj: ISignupData) {
/*     this.loggedIn = true; */
    return this.http.post<IAutData>(this.urlJsonServer+'/login', obj).pipe(
      tap(data => {
        this.autSubject.next(data);
        localStorage.setItem('isAuthenticated', JSON.stringify(data))
      })
    )
  }

  signup(obj: ISignupData) {
    return this.http.post(this.urlJsonServer+'/register', obj)
  }

  logout() {
    /* this.loggedIn = false; */
    this.autSubject.next(null);
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }
}
