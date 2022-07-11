import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
/* import { ContactPage } from './contact.page'; */
import { ContactComponent } from './contact.page';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExpansionComponent } from './expansion/expansion.component';


@NgModule({
  declarations: [
    ContactComponent,
    ExpansionComponent

  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatExpansionModule
  ]
})
export class ContactModule { }
