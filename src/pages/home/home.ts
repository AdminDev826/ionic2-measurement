import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cm } from '../cm/cm';
import { Kg } from "../kg/kg";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  gotoCM(){
    this.navCtrl.push(Cm);
  }
  gotoKg(){
    this.navCtrl.push(Kg);
  }

}
