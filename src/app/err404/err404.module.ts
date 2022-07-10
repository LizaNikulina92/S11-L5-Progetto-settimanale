import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrPage } from './err/err.page';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {path: '', component: ErrPage}
];

@NgModule({
  declarations: [
    ErrPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})
export class Err404Module { }
