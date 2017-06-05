import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Scroll } from 'ionic-angular';

/**
 * Generated class for the Kg page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-kg',
  templateUrl: 'kg.html',
})
export class Kg {

  @ViewChild(Scroll) scroll: Scroll;

  counts = [];
  selectedValue = "0.0";
  plusValue: any;
  total = 200;

  constructor(public navCtrl: NavController) {
    this.init();
  }
  init() {
    for(var i = 0; i <= this.total; i++){
      this.counts.push(i);
    }
  }
  ngAfterViewInit() {
    // var input = document.getElementById('ruler_content');
    // input.style.minWidth = "4000px";
    let _this = this;
    this.plusValue = window.innerWidth/2/150;
    this.selectedValue = this.plusValue.toFixed(1);
    this.scroll.addScrollEventListener((event) => {
      console.log(event.target.scrollLeft);
     _this.calcMesurement(event.target.scrollLeft);
    });
  }
  onScroll(event){
    console.log(event.target.scrollLeft);
    this.calcMesurement(event.target.scrollLeft);
  }
  calcMesurement(slength){
    let pp = slength /(30000/this.total) + this.plusValue;
    this.selectedValue = pp.toFixed(1);
  }

}
