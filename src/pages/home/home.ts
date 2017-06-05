import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  counts = [];

  constructor(public navCtrl: NavController) {
    this.init();
  }
  init() {
    for(var i = 0; i < 200; i++){
      this.counts.push(i);
    }
  }
  ngAfterViewInit() {
    // var input = document.getElementById('ruler_content');
    // input.style.minWidth = "4000px";
  }
}
