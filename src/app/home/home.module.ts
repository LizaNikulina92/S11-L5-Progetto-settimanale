import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class HomeModule { }
