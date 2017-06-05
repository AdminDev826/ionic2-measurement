import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cm } from './cm';

@NgModule({
  declarations: [
    Cm,
  ],
  imports: [
    IonicPageModule.forChild(Cm),
  ],
  exports: [
    Cm
  ]
})
export class CmModule {}
