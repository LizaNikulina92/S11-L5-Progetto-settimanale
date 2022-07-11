import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    HomePage,
    TabsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class HomeModule { }
