import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './feature-module/feature/feature.module';

/* import { UsersModule } from './users/users.module'; */
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { HeaderModuleModule } from './header-module/header-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import { Err404Module } from './err404/err404.module'; */


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    HeaderModuleModule,
    HomeModule,
    AuthModule,
    BrowserAnimationsModule
 /*    UsersModule, */
/*     Err404Module */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
