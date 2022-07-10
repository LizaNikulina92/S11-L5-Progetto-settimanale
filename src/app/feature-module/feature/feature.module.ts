import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureUserComponent } from '../feature-user/feature-user.component';
import { FeatureDetailComponent } from '../feature-detail/feature-detail.component';




@NgModule({
  declarations: [
    FeatureUserComponent,
    FeatureDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FeatureUserComponent,
    FeatureDetailComponent
  ]
})
export class FeatureModule { }
