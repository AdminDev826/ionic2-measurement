import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Kg } from './kg';

@NgModule({
  declarations: [
    Kg,
  ],
  imports: [
    IonicPageModule.forChild(Kg),
  ],
  exports: [
    Kg
  ]
})
export class KgModule {}
