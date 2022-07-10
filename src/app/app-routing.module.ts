import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';
import { ErrPage } from './err404/err/err.page';
import { AutGuard } from './auth/aut.guard';
import { HomePage } from './home/home/home.page';
import { UsersPage } from './users/users/users.page';

const routes: Routes = [
  { path: 'users',  canActivate: [AutGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  { path: 'home', canActivate: [AutGuard], component: HomePage},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'contact', canActivate: [AutGuard], loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'login', component: LoginPage },
  { path: 'register', component: SignupPage },
  { path: '**', loadChildren: () => import('./err404/err404.module').then(m => m.Err404Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
